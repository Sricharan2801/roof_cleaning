import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { faEnvelope, faPhone, faLocationDot, } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { services } from '../utils';


const contact = [
  { id: 1, name: "Location", icon: faLocationDot, value: "Lorem Ipsum" },
  { id: 2, name: "Phone", icon: faPhone, value: "+61 456-7890" },
  { id: 3, name: "Email", icon: faEnvelope, value: "jGwXv@example.com" },
  { id: 4, name: "Whatsapp", icon: faWhatsapp, value: "+61 456-7890" }
]

const Contact = () => {
  return (
    <section id='contact' className='w-full  mt-20 mb-20'>

      {/* <div className='w-full lg:pt-20 pt-10 flex flex-col items-center sm:text-3xl text-2xl font-bold'>
        <h1>CONTACT</h1>
        <div className='w-40 h-1 bg-green-500 mt-1'>
        </div>
      </div> */}

      <div className='w-full flex lg:flex-row flex-col justify-around lg:pt-20 pt-10'>

        <div className='lg:w-[30%] w-[95%] lg:ml-0 ml-[2.5%] flex flex-col justify-center '>

          <div className='w-full h-[27rem]   rounded-xl  bg-blue-50 shadow-xl shadow-slate-900'>
            <h1 className='text-center text-xl font-bold mt-4 text-orange-600'>Contact Details</h1>

            <div className='w-full h-full flex '>

              <span className='w-1/3 flex flex-col gap-10 mt-10'>
                {
                  contact.map(item => (
                    <FontAwesomeIcon key={item.id} icon={item.icon} className='text-3xl text-black ' />
                  ))
                }
              </span>

              <span className='w-2/3 flex flex-col gap-12 mt-10'>
                {
                  contact.map(item => (
                    <p key={item.id} className=' font-semibold text-black'>{item.value}</p>
                  ))
                }
              </span>

            </div>

          </div>

        </div>

        <div className='lg:w-[60%] w-[95%] lg:ml-0 ml-[2.5%] lg:mt-0 mt-20 bg-blue-50 shadow-xl shadow-slate-900 rounded-lg pt-5 pb-5'>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center ">
            <h2 className="text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl">Get your quote today</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              We’re here to help! Fill out the form, and our team will get back to you shortly.
            </p>
          </div>

          <form className="mx-auto mt-16 max-w-xl sm:mt-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block lg:ml-0 ml-[3%]  text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5 lg:w-full w-[94%] lg:ml-0 ml-[3%]">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block lg:ml-0 ml-[3%]  text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5 lg:w-full w-[94%] lg:ml-0 ml-[3%]">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block lg:ml-0 ml-[3%]  text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5 lg:w-full w-[94%] lg:ml-0 ml-[3%]">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block lg:ml-0 ml-[3%]  text-sm font-semibold leading-6 text-gray-900">
                  Select Servive
                </label>
                <div className="mt-2.5 lg:w-full w-[94%] lg:ml-0 ml-[3%]">
                  <select
                    id="service"
                    name="service"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option selected disabled value="">Please Select Service</option>
                    {
                      services.map(service => (
                        <option key={service.id} value={service.name}>{service.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block lg:ml-0 ml-[3%]  text-sm font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5 lg:w-full w-[94%] lg:ml-0 ml-[3%]">

                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block lg:ml-0 ml-[3%]  text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5 lg:w-full w-[94%] lg:ml-0 ml-[3%]">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="block w-1/3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>


      </div>



    </section>
  )
}

export default Contact
