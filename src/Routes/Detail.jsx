import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  // Api para cada dentista en especifico:
  // `https://jsonplaceholder.typicode.com/users/:id`
  
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
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {odontologo?
        <div>
          <img className="w-10 h-10" src="/images/doctor.jpg" alt="imagenDoctor" />
          <div>
            <h3>ID: {odontologo.id}</h3>
            <h3>Name: {odontologo.name}</h3>
            <h3>Username: {odontologo.username}</h3>
            <h3>Email: {odontologo.email}</h3>
            <h3>Phone: {odontologo.phone}</h3>
            <h3>Website: <a href={"https://"+odontologo.website} target='_blank'>{odontologo.website}</a></h3>
          </div>
        </div>
        : ""}
    </>
  )
}

export default Detail