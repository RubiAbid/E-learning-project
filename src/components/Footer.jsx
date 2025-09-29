import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=''>
      {/*  line */}
      <div className='w-full border-t-4 border-[#4C625B]'></div>

      <div className='bg-[#EBCDB8] w-full flex flex-col items-center justify-center py-8 gap-4 px-4 min-h-[calc(100vh-64px-84px)]'>
        {/* Logo */}
        <img 
          src="../../public/logo1.png" 
          alt="logo"
          className="w-44 sm:w-48 md:w-52 h-auto"
        />

        {/* Social icons */}
        <div className='flex flex-wrap justify-center gap-6 text-[#1B5241] text-2xl'>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="mailto:example@example.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Description */}
        <p className='text-[#181818] text-center max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl'>
          Empowering ambitious women to unleash their full potential, establish thriving online brands from the ground up, and attain complete financial independence.
        </p>

        {/* Buttons  */}
        <div className='flex flex-wrap justify-center gap-6 mt-4 text-[#1B5241]'>
          <button className='hover:text-[#A05525] transition-colors'>
            Contact Us
          </button>
          <button className='hover:text-[#A05525] transition-colors'>
            FAQs
          </button>
          <button className='hover:text-[#A05525] transition-colors'>
            Terms & Conditions
          </button>
        </div>
      </div>


      <div className='bg-[#A05425] w-full text-center p-5'>
        <h2 className='text-[#EBDBD0] text-sm sm:text-base'>
          Copyright 2025 | RiseAcademy. All Rights Reserved
        </h2>
      </div>
    </div>
  )
}

export default Footer;