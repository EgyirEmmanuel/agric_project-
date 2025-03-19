
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-bgBody text-white font-poppins font-normal text-[15px]">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Bottom section with links and copyright */}
        <div className="pt-4 flex flex-col md:flex-row justify-between items-center ">
          <div className="flex flex-wrap  justify-center text-center  gap-5 mb-3 md:mb-0 text-sm text-white">
            <Link href="/about" className="hover:text-hoverColor transition duration-300">About us</Link>
            <Link href="#" className="hover:text-hoverColor transition duration-300">Contact</Link>
            <Link href="#" className="hover:text-hoverColor transition duration-300">Privacy policy</Link>
            <Link href="#" className="hover:text-hoverColor transition duration-300">Sitemap</Link>

          </div>
          
          <div className="text-white font-poppins font-normal text-[15px]">
            © 2025, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;