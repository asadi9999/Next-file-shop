'use client'
import React from 'react'
import { useState } from 'react'
import { IoMdClose } from "react-icons/io";



const BlogPage = () => {
  const [showModal, setShowModal] = useState(false)
  const showHandle=()=>{
    setShowModal(true)
  }
  const hideHandle=()=>{
    setShowModal(false)
  }
  return (
    <>
      <main className=' flex justify-center'>
        <div className=" flex flex-col gap-5 justify-center items-center w-80 h-52 bg-orange-300 text-black">
          <h1>this is shop page</h1>
          <button className=' bg-indigo-500 text-white p-2 rounded-md' onClick={() => setShowModal(showModal(true))}>showModal</button>
          <div className="showModal invisible w-[80%] h-20 bg-zinc-200 p-3">
            <IoMdClose className=' hover:cursor-pointer w-10 h-10' onClick={() => setShowModal(showModal(false))}/>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

      </main>
    </>
  )
}

export default BlogPage
