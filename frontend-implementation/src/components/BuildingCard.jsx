import React from 'react'

const BuildingCard = ({building}) => {
  return (
    <div 
      key={building.name} 
      style={{ backgroundImage: `url(/assets/${building.building_picture || building.building_file})` }}
      className='w-full bg-cover rounded-md flex sm:flex-col flex-row max-sm:justify-between p-2 sm:min-h-[200px] min-h-[100px]'
    > 
      <div className='flex justify-end flex-col sm:flex-row order-2 sm:order-1'>
        <div className='bg-white p-2  md:mt-2 text-[10px] rounded-sm flex items-center gap-1 my-auto'>
          <div className='bg-green-700 w-2 h-2 rounded-2xl'></div>
          <p>{building.rooms_available} <span className='sm:hidden inline'>/ {building.rooms_available}</span> 
            <span className='hidden sm:inline'> rooms available</span>
            </p>
        </div>
      </div>
      <div className='mt-auto max-sm:my-auto flex items-center order-1 sm:order-2'>
        <div className='w-full sm:bg-amber-600 rounded-md m-auto text-white font-medium p-3'>
          {building.name}
        </div>
      </div>
    </div>
  )
}

export default BuildingCard