import React, { useRef, useState, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      const parsed = JSON.parse(passwords);
      setPasswordArray(Array.isArray(parsed) ? parsed : []);

    }

  }, []);
  const copyText = (text) => {
    toast("copied to clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    navigator.clipboard.writeText(text);


  }

  const showpassword = () => {

    if (ref.current.src.includes("/public/icons/images.png")) {
      ref.current.src = "/public/icons/eyeball-icon-png-eye-icon-1.png"
      passwordRef.current.type = "text"
    }
    else {
      ref.current.src = "/public/icons/images.png"
      passwordRef.current.type = "password"
    }
  }
  const savePassword = () => {

    const newPasswords = [...passwordArray, { ...form, id: uuidv4()}];
    setPasswordArray(newPasswords);
    localStorage.setItem("passwords", JSON.stringify(newPasswords));
    console.log(newPasswords);
    setform({ site: "", username: "", password: "" })
      toast("Password saved", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
  }
  const deletePassword = (id) => {
      toast("Password deleted successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    let c =  confirm("Are you sure you want to delete this password?");
    if(c){
    setPasswordArray(passwordArray.filter((item)=>item.id!==id))
    localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item)=>item.id!==id)));
console.log("delete password",id);
    }
  }
  const editpassword = (id) => {
console.log("edit password",id);
setform(passwordArray.filter((item)=>item.id===id)[0]);
setPasswordArray(passwordArray.filter((item)=>item.id!==id))
  }

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false}
        newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
<div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
     

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
              <input ref={passwordRef} value={form.password} onChange={handlechange} placeholder='Enter Password' className='bg-white rounded-full border border-green-600 w-full p-3 py-1' type="password" name='password' />
              <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showpassword}>
                <img ref={ref} className='p-1' width={26} src='/public/icons/eyeball-icon-png-eye-icon-1.png' alt='' />
              </span>
            </div>
          </div>

          <button onClick={savePassword} className=' mx-auto flex justify-center items-center bg-green-500 w-fit px-6 py-2 rounded-full hover:bg-green-400 border-1 border-green-900'>
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover">
            </lord-icon>
            Save</button>
        </div>
        <div className="passwords">
          <h2 className='text-2xl font-bold py-2'>Your Passwords</h2>
          {passwordArray.length === 0 && <div> No Passwords to show</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className='bg-green-800 text-white '>
              <tr>
                <th>Site</th>
                <th>Username</th>
                <th>Password</th>
                <th>Actions</th>

              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordArray.map((item, index) => {
                return <tr key={index}>
                  <td className='flex items-center justify-center text-center  py-2 border border-white'><a href="{item.site}" target='_blank'>{item.site}</a>
                    <div className='cursor-pointer size-5' onClick={() => copyText(item.site)}>
                      <span className="material-symbols-outlined ">
                        content_copy
                      </span>
                    </div>
                  </td>
                  <td className='text-center border border-white py-2'>
                    <div className='flex justify-center items-center'>
                      <span>
                        {item.username}
                      </span>
                      <div className='cursor-pointer size-5' onClick={() => copyText(item.username)}>
                        <span className="material-symbols-outlined ">
                          content_copy
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className='text-center border border-white py-2'>
                    <div className='flex justify-center items-center'><span>{item.password}</span>
                      <div className='cursor-pointer size-5' onClick={() => copyText(item.password)}>
                        <span className="material-symbols-outlined ">
                          content_copy
                        </span>
                      </div>
                    </div>

                  </td>
                  <td className='text-center border border-white py-2'>
                    <div className='flex justify-center items-center' ><span className='cursor-pointer mx-1' onClick={()=>{editpassword(item.id)}}>
                      <lord-icon
    src="https://cdn.lordicon.com/exymduqj.json"
    trigger="hover"
    style={{ width: "25px", height: "25px" }} 
   >
</lord-icon>
                    </span>
                    <span className='cursor-pointer mx-1' onClick={()=>{deletePassword(item.id)}}>
                      <lord-icon
    src="https://cdn.lordicon.com/jzinekkv.json"
    trigger="hover"
    style={{ width: "25px", height: "25px" }}>
</lord-icon>
                    </span>
                      
                    </div>

                  </td>
                </tr>
              })}
            </tbody>
          </table>}
        </div>

      </div>

    </div>
  )
}

export default Manager