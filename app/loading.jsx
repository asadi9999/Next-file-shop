'use client'
import React from 'react'
import Image from 'next/image'



const Loading = () => {
  return (
    <>
        <div className=" flex justify-center items-center p-12">
            <Image src={'/image/loading.svg'} width={150} height={150}/>
        </div>
    </>
  )
}

export default Loading
