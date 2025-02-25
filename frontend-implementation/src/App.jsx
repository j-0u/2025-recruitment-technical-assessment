import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import data from '../data.json';
import what from '../assets/biologicalScience.webp';
import what2 from '../assets/agsm.webp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-full flex flex-col'>
        <Navbar />
        <div className='mt-3 pr-2 pl-2 h-full flex flex-col'>
          <Search /> 
          <div className='flex grow'>
            <div className='gap-3 mt-2 grid grid-cols-5'>
              {
                data.map((building) => (
                  <div 
                    key={building.name} 
                    style={{ backgroundImage: `url(/assets/${building.building_picture || building.building_file})` }}
                    className='flex-1 w-full bg-cover rounded-md flex flex-col p-2'
                  > 
                    <div className='flex justify-end'>
                      <div className='bg-white p-2 mt-2 text-[10px] rounded-sm flex items-center gap-1'>
                        <div className='bg-green-700 w-2 h-2 rounded-2xl'></div>
                        <p>{building.rooms_available} rooms available</p>
                      </div>
                    </div>
                    <div className='mt-auto '>
                      <div className='w-[90%] bg-amber-600 rounded-md m-auto text-white p-3'>
                        {building.name}
                      </div>
                    </div>
                  </div>
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
