import React from 'react'

const Navbtn = ({children, selected}) => {
  return (
    <div className={`border-orange-400 border-1 rounded-sm p-1.5 ${selected ? 'bg-orange-500 text-white' : 'bg-white'}`}>
      {children}
    </div>
  )
}

export default Navbtn