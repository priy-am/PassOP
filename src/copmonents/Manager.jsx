import React, { useEffect, useState } from "react";
import { BiSolidShow } from "react-icons/bi";
import { HiEyeOff } from "react-icons/hi";
import { PiCopySimpleFill } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
  const [show, setshow] = useState(true)
  const [showPassword, setshowPassword] = useState("password")
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    let password = localStorage.getItem("password");
    if (password) {
      setpasswordArray(JSON.parse(password))
    }
  }, [])

//savebtn
  const savePassword = () => {
    if (form.site.length > 3 && form.password.length > 3) {
      setpasswordArray([...passwordArray, { form, id: uuidv4() }])
      localStorage.setItem("password", JSON.stringify([...passwordArray, { form, id: uuidv4() }]))
      setform({ site: "", username: "", password: "" });
    }else{
      toast(`Error :password is not saved`)
    }
  }
//deletebtn
  const deletePassword = (id) => {
    let c = confirm(`Do you really want to delete`)
    if (c) {
      setpasswordArray(passwordArray.filter(item => item.id != id))
      localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => item.id != id)))
      toast(`Password delted successfully`)
    }
  }
  //editbtn
  const editPassword = (id) => {
    setform(passwordArray.filter(i => i.id === id)[0].form)
    setpasswordArray(passwordArray.filter(item => item.id !== id))

  }

  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    toast(`copied ${text} to the clipboard`)
    console.log(text)
  }


  return (
    <>
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className=" p-2 md:mycontainer">
        <h1 className="text-4xl font-bold text-center ">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center ">Your own password manager</p>
        <div className=" flex flex-col p-4 text-black gap-5 md:gap-8 items-center">
          <input value={form.site} onChange={handleChange} placeholder="Enter website URL" className="rounded-full border border-green-800 w-full px-4 py-1" type="text" name="site" id="site" />
          <div className="flex flex-col md:flex-row justify-between w-full gap-5 md:gap-8">
            <input value={form.username} onChange={handleChange} placeholder="Enter username" className="rounded-full border border-green-800 w-full px-4 py-1" type="text" name="username" id="username" />
            <div className="relative">
              <input value={form.password} onChange={handleChange} placeholder="Enter Password" className="rounded-full  border border-green-800 w-full px-4 py-1" type={showPassword} name="password" id="password" />
              <div onClick={() => { setshow(!show), setshowPassword(showPassword == "password" ? "text" : "password") }} className=" absolute right-4 cursor-pointer bottom-1 show">{show ? <BiSolidShow size={"22px"} /> : <HiEyeOff size={"22px"} />}</div>
            </div>
          </div>
          <button onClick={() => savePassword()} className="flex items-center justify-center gap-2 border-2 border-green-700 hover:bg-green-400 bg-green-500 rounded-full px-5 py-2 w-fit ">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              className="w-[250px] h-[250px]">
            </lord-icon>
            Save Password</button>
        </div>
        <div className="password">
          <h2 className="font-bold py-3 text-center text-2xl">Your Password </h2>
          {passwordArray.length === 0 && <div className="font-bold text-center mt-16 text-gray-700">No Password here to show</div>}
          {/* table */}
          {passwordArray.length != 0 && <table className="md:table-auto table-fixed w-full overflow-hidden rounded-md mb-10">
            <thead className=" text-white bg-green-500">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {passwordArray.map((item, index) => {
                return <tr key={index}>
                  <td className="text-center md:w-32 break-all py-2 px-2 border border-white"><a className="hover:underline hover:text-blue-400 cursor-pointer" href={item.form.site} target='_blank'> {item.form.site}</a></td>
                  <td className="text-center md:w-32 break-all py-2 px-2 border border-white">
                    <div className="flex items-center gap-3 justify-around">
                      {item.form.username}
                      <div onClick={() => copyText(item.form.username)} className="copy cursor-pointer"><PiCopySimpleFill /><ToastContainer /></div>
                    </div>
                  </td>
                  <td className="text-center md:w-32 break-all py-2 px-2 border border-white">
                    <div className="flex items-center gap-3 justify-around">
                      {"*".repeat(item.form.password.length)}
                      <div onClick={() => copyText(item.form.password)} className="copy cursor-pointer"><PiCopySimpleFill /><ToastContainer /></div>
                    </div>
                  </td>
                  <td className="text-center md:w-32 break-all py-2 px-2 border border-white">
                    <div className="flex items-center justify-evenly ">
                      <span onClick={() => editPassword(item.id)} className="edit cursor-pointer"> <FaEdit size={"25px"} /></span>
                      <div onClick={() => deletePassword(item.id)} className="delte cursor-pointer"><lord-icon
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        style={{ "width": "30px", "height": "30px" }}>
                      </lord-icon></div>
                    </div>
                  </td>
                </tr>
              })}


            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
};

export default Manager;
