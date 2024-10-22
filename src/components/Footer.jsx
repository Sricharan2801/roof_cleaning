import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='w-full h-[15rem] bg-black text-white'>
      <div className='w-full h-[20%] flex justify-center items-center'>
        <h1 className='sm:text-lg text-sm text-center'>
          Keep your roof looking brand new - because your home deserves the best!
        </h1>
      </div>

      <div className='w-full h-[70%] flex justify-around items-center'>
        {/* First Div: Contact Info */}
        <div className='flex flex-col items-start'>
          <div className='flex items-center mb-2 '>
            <FontAwesomeIcon icon={faLocationDot} className='mr-2' />
            <span className='pl-2'>Your Address Here</span>
          </div>
          <div className='flex items-center mb-2'>
            <FontAwesomeIcon icon={faPhone} className='mr-2' />
            <span className='pl-2'>(123) 456-7890</span>
          </div>
          <div className='flex items-center mb-2'>
            <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
            <span className='pl-2'>email@example.com</span>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faWhatsapp} className='mr-2' />
            <span className='pl-2'>(123) 456-7890</span>
          </div>
        </div>

        {/* Second Div: Navigation Links */}
        <div className='flex flex-col items-start'>
          <a href="/" className='mb-2 hover:font-semibold'>Home</a>
          <a href="/about" className='mb-2 hover:font-semibold'>About</a>
          <a href="/services" className='mb-2 hover:font-semibold'>Services</a>
          <a href="/contact" className='hover:font-semibold'>Contact</a>
        </div>

        {/* Third Div: Social Media Icons */}
        <div className='flex flex-col items-start'>
          <div className='flex mb-2'>
            <FontAwesomeIcon icon={faInstagram} className='mr-2 text-[1.3rem] mb-1' />
            {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> */}
          </div>
          <div className='flex mb-2'>
            <FontAwesomeIcon icon={faYoutube} className='mr-2 text-[1.3rem] mb-1' />
            {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a> */}
          </div>
          <div className='flex mb-2'>
            <FontAwesomeIcon icon={faFacebook} className='mr-2 text-[1.3rem] mb-1' />
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> */}
          </div>
          <div className='flex'>
            <FontAwesomeIcon icon={faTwitter} className='mr-2 text-[1.3rem] mb-1' />
            {/* <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a> */}
          </div>
        </div>
      </div>

      <div className='w-full h-[10%]'>
<h3 className='font-semibold text-center'>Developed with ❤️ Sri Charan </h3>
      </div>
    </footer>
  );
}

export default Footer;
