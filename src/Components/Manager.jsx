import React from 'react'

const Manager = () => {
  return (
   <>
<div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>


 <div className="mycontainer">
    <h1 className='text-3xl font-bold text-center'>
 <span className='text-green-700'> &lt;</span>
          Pass
           <span className='text-green-700'>OP / &gt;</span>
        

    </h1>
    <p className='text-green-900 text-center text-lg'>Your own Password Manager</p>
 <div className='text-black flex flex-col p-4 gap-6'>
    <input placeholder='Enter Website Url' className='bg-white rounded-full border border-green-600 w-full p-3 py-1' type="" name='' id='' />
    <div className="flex gap-8 ">
        <input placeholder='Enter Username' className="bg-white rounded-full border border-green-600 w-full p-3 py-1" type="text" />
        <div className='relative'>
        <input placeholder='Enter Password' className='bg-white rounded-full border border-green-600 w-full p-3 py-1' type="text" /> 
        <span className='absolute right-0'>
        show
        </span>
        </div>
    </div>
    
    <button className=' mx-auto flex justify-center items-center bg-green-500 w-fit px-6 py-2 rounded-full hover:bg-green-400 border-1 border-green-900'> 
      <lord-icon
    src="https://cdn.lordicon.com/efxgwrkc.json"
    trigger="hover">
</lord-icon> 
      Add password</button>
 </div>
 </div>

 </>
  )
}

export default Manager