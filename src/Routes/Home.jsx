import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  //inicialmente usaremos useSTATE para guardar la info de la API
  const [odontologos, setOdontologos] = useState([])

//   La API a utilizar sera la siguiente:
// `https://jsonplaceholder.typicode.com/users`

  const getOdontologos = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    await setOdontologos(data)
  }

  useEffect(()=>{
    getOdontologos()
  },[])



  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {odontologos?.map(odon => (<Card key={odon.id} id={odon.id} name={odon.name} username={odon.username}/>) )}
      </div>
    </main>
  )
}

export default Home