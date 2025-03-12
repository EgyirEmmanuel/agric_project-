import Image from 'next/image'

import edenway from "./../../public/edenway.png"
import gaiaLogo from "./../../public/gaiaLogo.png"

const MidFooter = () => {
  return (
    <div className='w-full py-20 flex flex-col gap-6 items-center'>
      {/* title */}
        <div className='w-full text-center'>
        <h4 className='font-semibold text-[40px] text-textColors font-sans'>Our Sponsors</h4>
      </div>

        {/* overall images */}
      <div className='w-full flex gap-10 items-center justify-center'>
        {/* image 1 */}
      <div>
        <Image src={edenway} alt='pic1' width={400} height={400} />
      </div>
      {/* image 2 */}
      <div>
        <Image src={gaiaLogo} alt='pic2' width={400} height={400} />
      </div>
      </div>


    </div>
  )
}

export default MidFooter
