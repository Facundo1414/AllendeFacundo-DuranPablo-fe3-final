import React from 'react'
import Form from '../Components/Form'
import { useTheme } from '../Components/utils/global.context';


const Contact = () => {
  const { theme } = useTheme();
  const mainStyle = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black';

  return (
    <div className={`flex flex-col items-center justify-center h-screen py-24   ${mainStyle}`}>
      <h2 className='font-bold mb-4'>Want to know more?</h2>
      <p className='font-bold mb-4'>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact