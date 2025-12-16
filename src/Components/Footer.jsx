import React from 'react'

const Footer = () => {
  return (
   <div className='bg-slate-800 text-white flex flex-col justify-center items-center'>
     <div className="logo font-bold text-white text-2xl ">
          <span className='text-green-700'> &lt;</span>
          Pass
           <span className='text-green-700'>OP / &gt;</span>
          </div>
    <div className='flex'>
Created with <img className='w-10 mx-2' src="/public/icons/5b483f2bce11ef92931595af512103d2.jpg" alt="h" /> by Aditya
    </div>
   </div>
       
  )
}

export default Footer