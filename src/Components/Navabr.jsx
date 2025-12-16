import React from 'react'

const Navabr = () => {
  return (
    <nav className=' bg-slate-900 text-amber-50'>
      <div className='mycontainer  flex justify-between items-center px-4 py-2 h-15'> 

        <div className="logo font-bold text-white text-2xl ">
          <span className='text-green-700'> &lt;</span>
          Pass
           <span className='text-green-700'>OP / &gt;</span>
          </div>
       { /*<ul>
            <li className='flex gap-4'>
           <a className="hover:font-bold" href="/">Home</a>
           <a className="hover:font-bold" href="#">About</a>
           <a className="hover:font-bold" href="#">Contact</a>
           </li>
        </ul>*/}
        <button className='text-white bg-green-700 my-5 rounded-md flex justify-between items-center'>
          <img className=' invert p-1 w-10' src="/public/icons/25231.png" alt="github logo" />
          <span className='font-bold px-2'>Github</span>
        </button>
        </div>
        </nav>
  )
}

export default Navabr