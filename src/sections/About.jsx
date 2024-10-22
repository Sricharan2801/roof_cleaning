import React from 'react'
import water2 from "../assets/water2.jpg"
import video1 from "../assets/video1.mp4"

const About = () => {
    return (
        <section id='about' className='w-full h-[100vh] ' >

            <div className='w-full  pt-20 flex flex-col items-center sm:text-3xl text-2xl font-bold'>
                <h1>ABOUT US</h1>
                <div className='w-44 h-1 bg-green-500 mt-1'>
                </div>
            </div>

            <div className='w-full flex lg:flex-row flex-col '>
                <div className='lg:w-[40%] w-full flex justify-center pt-5 pb-10'>
                    <div className='w-[95%] rounded-xl shadow-2xl shadow-slate-900'>
                        <h1 className='text-3xl font-semibold text-center pt-10 text-orange-600 '>Welcome to Lorem Roofing</h1>

                        <p className='font-sans sm:text-[1rem]  text-sm text-center text-balance font-medium text-gray-600 mt-5 pl-10 pr-8'>
                        At Lorem Roofing, we provide top-quality roof cleaning services that enhance your home’s beauty and longevity. Our skilled team uses eco-friendly techniques to effectively remove dirt, moss, and debris.
                        </p>

                        <p className='sm:text-[1rem] font-sans text-sm text-center text-balance font-medium text-gray-600 mt-5 pb-10 pl-10 pr-8'>
                        We are committed to delivering exceptional results that protect your investment and boost your curb appeal. Trust us to keep your roof in peak condition!


                        </p>
                    </div>
                </div>

                <div className='lg:w-[60%] w-full   flex justify-center lg:pt-5 pt-20 pb-10 '>
                    <div className='w-[98%]  rounded-xl shadow-2xl shadow-slate-900'>
                        <video src={video1} className=' rounded-xl' controls></video>
                    </div>

                </div>
            </div>



        </section>
    )
}

export default About
