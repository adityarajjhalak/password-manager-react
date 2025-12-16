import React, { useRef, useState,useEffect } from 'react'

const Manager = () => {
   const ref = useRef();
   const [form, setform] = useState({site:"", username:"", password:""})
   const [passwordArray, setPasswordArray] = useState([]);
useEffect(() => {
 let passwords = localStorage.getItem("passwords");
if(passwords){
  const parsed = JSON.parse(passwords);
   setPasswordArray(Array.isArray(parsed) ? parsed : []);

}

}, []);

const showpassword=()=>{
  if(ref.current.src.includes("/public/icons/images.png")){
ref.current.src ="/public/icons/eyeball-icon-png-eye-icon-1.png"
  } 
  else{
ref.current.src ="/public/icons/images.png"
  }
}
const savePassword = ()=>{
 const newPasswords = [...passwordArray, form];
 setPasswordArray(newPasswords);
 localStorage.setItem("passwords", JSON.stringify(newPasswords)); 
 console.log(newPasswords);
}

const handlechange=(e)=>{
setform({...form, [e.target.name]:e.target.value})
}

  return (
   <>
<div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>


 <div className="mycontainer">
    <h1 className='text-3xl font-bold text-center'>
 <span className='text-green-700'> &lt;</span>
          Pass
           <span className='text-green-700'>OP / &gt;</span>
        

    </h1>
    <p className='text-green-900 text-center text-lg'>Your own Password Manager</p>
 <div className='text-black flex flex-col p-4 gap-6'>
    <input value={form.site} onChange={handlechange} placeholder='Enter Website Url' className='bg-white rounded-full border border-green-600 w-full p-3 py-1' type="" name='site' id='' />
    <div className="flex gap-8 ">
        <input value={form.username} onChange={handlechange} placeholder='Enter Username' className="bg-white rounded-full border border-green-600 w-full p-3 py-1" type="text" name='username' />
        <div className='relative'>
        <input value={form.password} onChange={handlechange} placeholder='Enter Password' className='bg-white rounded-full border border-green-600 w-full p-3 py-1' type="text" name='password' /> 
        <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showpassword}>
       <img  ref={ref} className='p-1' width={26} src='/public/icons/eyeball-icon-png-eye-icon-1.png' alt=''/>
        </span>
        </div>
    </div>
    
    <button onClick={savePassword} className=' mx-auto flex justify-center items-center bg-green-500 w-fit px-6 py-2 rounded-full hover:bg-green-400 border-1 border-green-900'> 
      <lord-icon
    src="https://cdn.lordicon.com/efxgwrkc.json"
    trigger="hover">
</lord-icon> 
      Add password</button>
 </div>
<div className="passwords">
<h2 className='text-2xl font-bold py-2'>Your Passwords</h2>
{passwordArray.length=== 0 && <div> No Passwords to show</div>}
{passwordArray.length !=0 &&<table className="table-auto w-full rounded-md overflow-hidden">
  <thead className='bg-green-800 text-white'>
    <tr>
      <th>Site</th>
      <th>Username</th>
      <th>Password</th>
    </tr>
  </thead>
  <tbody className='bg-green-100'>
    {passwordArray.map((item, index)=>{
return <tr key={index}>
      <td className='text-center w-32 py-2'><a href="{item.site}" target='_blank'>{item.site}</a></td>
      <td className='text-center w-32 py-2'>{item.username}</td>
      <td className='text-center w-32 py-2'>{item.password}</td>
    </tr>
   })}
  </tbody>
</table>} 
</div>

 </div>

 </>
  )
}

export default Manager