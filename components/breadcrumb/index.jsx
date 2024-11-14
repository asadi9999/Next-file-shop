import Link from 'next/link'
import React from 'react'

const BreadCrumb = ({seconTitle,secondLink,title}) => {
  return (
    <>
        <div className=" w-72 flex justify-between items-center">
            <Link href={'/'} className=' text-blue-400 hover:text-blue-500 transition-all duration-300'>خانه</Link>
            <span>/</span>
            <Link href={secondLink}>{seconTitle}</Link>
            <span>/</span>
            <div>{title}</div>
        </div>
    </>
  )
}

export default BreadCrumb
