import React from 'react'

const ServiceCards = ({service}) => {
  return (
    <div className='w-[15rem] h-[15rem] bg-blue-50  shadow-xl shadow-slate-900 rounded-xl mt-5 mb-5'>
      <h1 className=' text-lg  text-center pt-2 text-orange-600 font-bold'>{service.name}</h1>
      <p className='pt-2 text-gray-600 text-sm text-center leading-7'>{service.description}</p>
      <button className='w-[6rem] h-[2rem] border-solid border-2 ml-16 mt-5 rounded-lg text-sm font-semibold hover:bg-orange-600 hover:text-white'>Know More</button>
    </div>
  )
}

export default ServiceCards
