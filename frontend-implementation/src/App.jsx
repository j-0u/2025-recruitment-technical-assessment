import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import data from '../data.json';
import what from '../assets/biologicalScience.webp';
import what2 from '../assets/agsm.webp'
import BuildingCard from './components/BuildingCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-full flex flex-col'>
        <Navbar />
        <div className='mt-3 px-4 h-full flex flex-col'>
          <Search /> 
          <div className='flex xl:grow py-2 overflow-auto'>
            <div className='gap-3 grid xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 w-full'>
              {
                data.map((building) => (
                  <BuildingCard key={building.name} building={building} />
                ))
              }
            </div>
          </div>
          
        </div>
      </div>
      <div> 
        
      </div>
    </>
  )
}

export default App
