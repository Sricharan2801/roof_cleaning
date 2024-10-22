import React from 'react'
import ServiceCards from '../components/ServiceCards'
import { services } from '../utils'

const Services = () => {
    return (
        <section id='services' className='w-full  '>
            <div className='w-full lg:pt-20 pt-10 flex flex-col items-center sm:text-3xl text-2xl font-bold'>
                <h1>OUR SERVICES</h1>
                <div className='w-52 h-1 bg-green-500 mt-1'>
                </div>
            </div>

            <div className='w-full flex flex-wrap gap-4 justify-evenly '>
                {
                    services.map(service => (
                        <ServiceCards key={service.id} service={{...service}}  />
                    ))
                }
            </div>
        </section>
    )
}

export default Services
