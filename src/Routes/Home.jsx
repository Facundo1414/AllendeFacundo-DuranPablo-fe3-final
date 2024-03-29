import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useFavsStates, useTheme } from '../Components/utils/global.context';


const Home = () => {
  //Theme
  const { theme } = useTheme();
  const mainStyle = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black';
  
  //Get
  const {favsState} = useFavsStates()

  return (
    <main className={`${mainStyle} h-screen`}>
      <div className='card-grid pt-10'>
        {favsState.odontologos?.map(odon => (<Card key={odon.id} id={odon.id} name={odon.name} username={odon.username} btn={"add"}/>) )}
      </div>
    </main>
  )
}

export default Home