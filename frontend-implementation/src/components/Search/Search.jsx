import React from 'react'

const Search = () => {
  return (  
    <div className='flex justify-between text-sm'>
      <button className='border-orange-400 border-2 rounded-sm px-4 md:px-6 md:py-2 flex gap-2 items-center text-orange-500'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z"/></svg>
        <p>Filters</p>
      </button>
      <div className='flex items-center border-[1.5px] border-gray-300 rounded-sm w-1/2 lg:w-3/5 p-1 gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        <input type="text" placeholder='Search for a building...' />
      </div>
      <button className='border-orange-400 border-2 rounded-sm px-4 md:px-6 md:py-2 flex gap-2 items-center text-orange-500'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"/></svg>
        <p>Sort</p>
      </button>
    </div>
  )
}

export default Search