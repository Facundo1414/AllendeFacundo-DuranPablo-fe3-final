import React from 'react'
import { useTheme } from './utils/ThemeContext';

const Footer = () => {

  const { theme } = useTheme();

  const footerStyle = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-700 text-black';


  return (
    <footer className={`w-auto h-auto flex justify-items-center items-center gap-x-14  ${footerStyle}`}>
        <a href="#"><img src="../../public/images/ico-facebook.png" className="size-8" alt='DH-logo' /></a>
        <a href="#"><img src="../../public/images/ico-instagram.png" className="size-8" alt='DH-logo' /></a>
        <a href="#"><img src="../../public/images/ico-tiktok.png" className="size-8" alt='DH-logo' /></a>
        <a href="#"><img src="../../public/images/ico-whatsapp.png" className="size-8" alt='DH-logo' /></a>
    </footer>
  )
}

export default Footer
