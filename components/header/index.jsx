'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsTelegram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import '/styles/globals.css'
import { useState } from 'react'


const Header = () => {
  const [logoHover, setlogoHover] = useState(0)
  return (
    <>
      <header className='mx-auto py-2 px-2 bg-zinc-100 w-full shadow-md'>
        <div className="flex  flex-col md:flex-row justify-between items-center gap-5 w-full">
          <div className=" flex flex-col justify-center items-center w-40 h-52 relative transition-all duration-300 ">
            <Link href={'/'} className=' w-full z-30 bg-white shadow-md hover:shadow-lg rounded-md text-center'
              onMouseEnter={() => setlogoHover(1)}
              onMouseLeave={() => setlogoHover(0)}
            >
              <div className="mx-auto flex justify-center">
                <Image className=' '
                  src='/image/logo.png'
                  width={100}
                  height={100}
                  alt='File Shop Logo'
                  objecfit='cover'
                  layout='fixed'
                  unoptimized={true}
                />
              </div>

              <div className=' p-2 mt-1'>فروشگاه فایل کلیک</div>
            </Link>
            <div className={
                logoHover == 0 ?
                  'flex flex-row justify-around items-center gap-2 text-[1.5rem] p-2 w-full text-indigo-500 z-20 transition-all duration-300 absolute bottom-20 right-0 left-0 mt-4'
                  :
                  'flex flex-row justify-around items-center gap-2 text-[1.5rem] p-1 w-full text-indigo-500 z-20 transition-all duration-300 absolute bottom-0 right-0 left-0 mt-0'
              }
                onMouseEnter={() => setlogoHover(1)}
                onMouseLeave={() => setlogoHover(0)}
              >
                <Link href={'#'} target={'_blank'} className='transition-all duration-500 hover:text-orange-500'><BsTelegram /></Link>
                <Link href={'#'} target={'_blank'} className=' transition-all duration-500 hover:text-orange-500'><BsTwitter /></Link>
                <Link href={'#'} target={'_blank'} className=' transition-all duration-500 hover:text-orange-500'><BsYoutube /></Link>
            </div>
          </div>
          <div className=' w-full flex flex-col justify-start gap-5'>
            <div className=' flex justify-between '>
              <nav>
                <ul className=' flex flex-wrap justify-between items-center gap-1 '>
                  <li><Link href={'/'} className='flex justify-center items-center bg-zinc-300 p-2 rounded-md w-28 h-10'>صفحه اصلی</Link></li>
                  <li><Link href={'/'} className=' flex justify-center items-center bg-zinc-300 p-2 rounded-md w-28 h-10'>کتابها</Link></li>
                  <li><Link href={'/'} className=' flex justify-center items-center bg-zinc-300 p-2 rounded-md w-28 h-10'>اپلیکیشن</Link></li>
                  <li><Link href={'/'} className=' flex justify-center items-center bg-zinc-300 p-2 rounded-md w-28 h-10'>فایل</Link></li>
                  <li><Link href={'/blog'} className=' flex justify-center items-center bg-zinc-300 p-2 rounded-md w-28 h-10'>وبلاگ</Link></li>
                  <li><Link href={'/dashboard'} className=' flex justify-center items-center bg-zinc-300 p-2 rounded-md w-28 h-10'>داشبورد</Link></li>
                </ul>
              </nav>
            </div>
            <div className=' w-full flex flex-col gap-3 flex-wrap md:flex-row justify-between'>
              <div className="w-[30%] flex flex-row justify-start  h-12 items-center ">
                <input type="text" name="productSearch" id="productSearch" placeholder='جستجو بین محصولات...' className=' text-lg p-3 h-full hover:w-full hover:transition-all hover:shadow-[0px_0px_15px_rgba(0,0,0,.25)] hover:border-b-0 duration-700 outline-none' />
                <label htmlFor="productSearch" className=' h-full flex items-center p-2 rounded-e-md bg-white'><LuSearch className='' /></label>
              </div>
              <div className="w-[20%] flex justify-end  gap-5 items-center">
                <div className=" bg-zinc-300 p-1 rounded-md w-12 h-12 flex justify-center items-center">
                  <Link href={'/account'}><FaUserAlt /></Link>
                </div>
                <Link href={'/cart'}>
                  <div className=" flex justify-between items-center bg-orange-300 rounded h-12 gap-1 px-1 py-2">
                    <div className=" text-orange-300 bg-white rounded-full h-8 w-8 flex flex-row justify-center items-center">0</div>
                    <div className=" text-white bg-orange-300">سبدخرید</div>
                    <div className=" text-orange-300 bg-white p-2 w-8 h-8 rounded-full">
                      <MdShoppingCart />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-end gap-2">
            <div className=' flex justify-center items-center p-2'>
              <div className=" p-2">09124446446</div>
              <div className=" p-2 bg-zinc-200 rounded rotate-12"><FaPhoneAlt className=' -rotate-12' /></div>
            </div>
            <div className=' flex justify-center items-center p-2'>
              <div className=" p-2">example@gmail.com</div>
              <div className=" p-2 bg-zinc-200 rounded rotate-12"><IoMdMailUnread className=' -rotate-12' /></div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

