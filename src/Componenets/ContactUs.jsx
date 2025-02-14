import React from 'react'
import { contactData } from '../utils/contact'

const ContactUs = () => {
  return (
    <div className="w-full">
        <h1 className='text-4xl font-bold flex justify-center mb-2 mt-10'>Contact Us</h1>
        <p className='flex justify-center text-gray-500'>We are open 24x7 for your support</p>
   
        <div className="flex justify-center items-center m-5 gap-5">
  {/* Left Section - Contact Cards */}
  <div className="w-4/12 flex flex-col justify-between h-[70vh] gap-5 ">
    {contactData.map((item, index) => (
      <div 
        key={index} 
        className="w-full h-1/3 shadow-md p-6 rounded-md border border-gray-700 flex flex-col justify-between"
      >
        <div className="flex-1 flex flex-col justify-center text-center">
          <h2 className="text-lg font-semibold text-white">{item.title}</h2>
          <p className="text-gray-400 text-sm mt-1">{item.description}</p>
        </div>
        <div className="text-gray-300 text-center">
          <p className="font-medium text-sm">📞 {item.phone}</p>
          <p className="text-sm text-green-400">{item.email}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Right Section - Contact Form */}
  <div className="w-1/2 h-[70vh] flex flex-col justify-between p-6 rounded-md border border-gray-700 shadow-md">

    <label className="input input-bordered flex items-center gap-2 my-2 p-2 text-white text-base">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
      </svg>
      <input type="text" className="grow bg-transparent text-white" placeholder="Name" />
    </label>

    <label className="input input-bordered flex items-center gap-2 my-2 p-2 text-white text-base">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
      </svg>
      <input type="text" className="grow bg-transparent text-white" placeholder="Email" />
    </label>

    <textarea className="textarea textarea-bordered w-full text-base text-white h-full resize-none" placeholder="Message"></textarea>

    {/* <button className="btn btn-success w-full mt-4 text-white text-base">Submit</button> */}
    <button className="btn btn-outline btn-success text-lg px-6 py-3 w-[200px] mt-5 shadow-md hover:scale-105 transition-transform ">
    Submit
  </button>

  </div>
</div>


  </div>
  )
}

export default ContactUs