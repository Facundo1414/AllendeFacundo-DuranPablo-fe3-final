import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from '../Components/utils/global.context';

const Detail = () => {
  const { theme } = useTheme();
  const mainStyle = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black';

  const [odontologo, setOdontologo] = useState([])
  const params = useParams()

  const getOdontologo = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()
    await setOdontologo(data)
  }

  useEffect(()=>{getOdontologo()},[])

  return (
    <>
      {odontologo?
        <div className={`${mainStyle} flex flex-col items-center p-10 gap-10 h-screen`}>
          <img className="w-24 h-24" src="/images/doctor.jpg" alt="imagenDoctor" />
          <div className='font-medium text-xl'>
            <h2>Name: {odontologo.name}</h2>
            <h2>Username: {odontologo.username}</h2>
            <h2>Email: {odontologo.email}</h2>
            <h2>Phone: {odontologo.phone}</h2>
            <h2 >Website: 
              <a className={`${mainStyle}`} href={"https://"+odontologo.website} target='_blank'>{odontologo.website}</a>
            </h2>
          </div>
        </div>
        : ""}
    </>
  )
}

export default Detail