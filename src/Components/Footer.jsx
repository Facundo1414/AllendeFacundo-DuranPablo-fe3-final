import React from 'react'
import { useTheme } from '../Components/utils/global.context';

const Footer = () => {

  const { theme } = useTheme();

  const footerStyle = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-700 text-black';


  return (
    <footer className={`w-auto h-auto flex justify-items-center items-center gap-x-14  ${footerStyle}`}>
        <a href="#"><img src="/images/ico-tiktok.png" className="size-8" alt='tiktok-logo' /></a>
        <a href="#"><img src="/images/ico-facebook.png" className="size-8" alt='facebook-logo' /></a>
        <a href="#"><img src="/images/ico-whatsapp.png" className="size-8" alt='whatsapp-logo' /></a>
        <a href="#"><img src="/images/ico-instagram.png" className="size-8" alt='instagram-logo' /></a>
    </footer>
  )
}

export default Footer
