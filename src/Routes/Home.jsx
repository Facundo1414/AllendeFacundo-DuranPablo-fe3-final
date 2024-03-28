import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useTheme } from '../Components/utils/global.context';


const Home = () => {

  const [odontologos, setOdontologos] = useState([])
  const { theme } = useTheme();

  const mainStyle = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black';

  const getOdontologos = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    await setOdontologos(data)
  }

  useEffect(()=>{
    getOdontologos()
  },[])



  return (
    <main className={`${mainStyle} h-screen`}>
      <div className='card-grid pt-10'>
        {odontologos?.map(odon => (<Card key={odon.id} id={odon.id} name={odon.name} username={odon.username}/>) )}
      </div>
    </main>
  )
}

export default Home