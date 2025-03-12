import { useState, useEffect } from 'react';
// this mqtt library manages the connection bewtween you application and the broker
import mqtt from 'mqtt';

export function useMqtt(host, topic) {
  const [client, setClient] = useState(null);
  const [isConnected, setIsConnected] = useState(false); 
  const [messages, setMessages] = useState([]);

  useEffect(() => {
        // Create and connect an MQTT client to the specified host
    const mqttClient = mqtt.connect(host);

    // connect event listener to listen for connection and set the setConnected state to true
    mqttClient.on('connect', () => {
      // console.log('Connected to MQTT broker');
      setIsConnected(true);
      
      // Subscribe to topic
      mqttClient.subscribe(topic, (err) => {
        if (!err) {
          // console.log(`Subscribed to ${topic}`);
        }
      });
    });
    

    mqttClient.on('message', (topic, payload) => {
      try {
        const message = JSON.parse(payload.toString());
        // console.log('Received message:', message);
        // Add received timestamp
        message.receivedAt = Date.now();
        setMessages(prev => [message, ...prev].slice(0, 100)); // Keep last 100 messages
      } catch (e) {
        console.error('Failed to parse message:', e);
      }
    });

    mqttClient.on('error', (err) => {
      console.error('MQTT error:', err);
      setIsConnected(false);
    });

    mqttClient.on('offline', () => {
      // console.log('MQTT client is offline');
      setIsConnected(false);
    });

    // Set client in state
    setClient(mqttClient);

    // Clean up on unmount
    return () => {
      if (mqttClient) {
        mqttClient.end();
      }
    };
  }, [host, topic]);

  return { client, isConnected, messages };
}

