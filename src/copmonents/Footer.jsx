import React from 'react'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col items-center py-3'>
      <div className="logo font-bold text-2xl">
          <span className="text-green-800">&lt;</span>
          <span>Pass</span>
          <span className="text-green-800">OP/&gt;</span>
        </div>
        <div className='flex gap-1 items-center text-gray-400'>
            Created with <span className='text-red-600'><FaHeart/></span>, by code.priyam
        </div>
    </div>
  )
}

export default Footer
