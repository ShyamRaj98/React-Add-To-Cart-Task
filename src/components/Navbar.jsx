import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar({ count = "0", openMiniCart }) {
  return (
    <header className='bg-white py-3 px-2 w-full fixed top-0 z-10 shadow-lg'>
      <div className='container lg mx-auto px-2 flex justify-between items-center'>
        <h1 className='text-2xl logo'>Shyam Store</h1>
        <div className='relative p-2 w-fit ml-auto' onClick={openMiniCart}>
          <MdOutlineShoppingCart size={30} />
          <span className='bg-zinc-800 text-white w-5 h-5 rounded-full absolute top-0 right-0 flex items-center justify-center'>{count}</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar