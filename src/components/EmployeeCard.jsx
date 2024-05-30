import React from 'react'

function EmployeeCard({ employ, setemp }) {
  return (
    <div className='bg-slate-200 my-2 rounded-lg' onClick={(e) => {
      console.log(employ.id)
      setemp(()=>{return employ})
    }}>
      <p className='text-xs'>{employ.name}</p>
    </div>
  )
}

export default EmployeeCard