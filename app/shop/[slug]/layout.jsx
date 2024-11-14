import Link from 'next/link';
import React from 'react'
import { LuSearch } from "react-icons/lu";
import { IoSendOutline } from "react-icons/io5";


const BlogLayout = ({ children }) => {
  return (
    <>
      <div className=" flex md:justify-between items-start gap-4 container mx-auto my-5">
        <main className=' w-[70%]'>{children}</main>
        <aside className=' flex flex-col gap-12 w-[30%] max-w-70 rounded-md'>
          <div className=" flex flex-col gap-4">
            <button className=' flex justify-center items-center transition-all duration-300 bg-orange-300 hover:bg-orange-400 p-2 hover:text-white w-full rounded-md'>30000هزار تومان-افزودن به سبدخرید</button>
            <button className=' flex justify-center items-center transition-all duration-300 bg-blue-300 hover:bg-blue-400 p-2 hover:text-white w-full rounded-md'>  افزودن به علاقه مندیها </button>
          </div>
          <div className=" flex flex-col gap-12 shadow-md hover:shadow-lg border-2 p-5 rounded-lg">
            <div className=" flex justify-between">
              <span className=' flex justify-start'>تعدادخرید</span>
              <span className=' flex justify-end'>12</span>
            </div>
            <div className=" flex justify-between">
              <span className=' flex justify-start'>تعدادبازدید</span>
              <span className=' flex justify-end'>80</span>
            </div>
            <div className=" flex justify-between">
              <span className=' flex justify-start'>تعداددیدگاه</span>
              <span className=' flex justify-end'>32</span>
            </div>
          </div>
          <div className=" flex flex-col shadow-md hover:shadow-lg border-2 p-5 rounded-lg">
            <h3 className=' text-blue-400'>معرفی کوتاه</h3>
            <div className=" flex justify-start items-center">
              <p className=' text-base sm:text-sm line-clamp-3 leading-8'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
              </p>
            </div>
          </div>
          <div className=" flex flex-col shadow-md hover:shadow-lg border-2 p-5 rounded-lg">
            <h3 className=' text-blue-400'>برچسبها</h3>
            <div className=" flex justify-start items-center gap-2 flex-wrap p-1">
              <Link href={'/'} className='border-zinc-800 p-2 flex justify-center items-center text-base sm:text-sm bg-zinc-100 rounded-md hover:bg-zinc-200'>مقاله</Link>
              <Link href={'/'} className='border-zinc-800 p-2 flex justify-center items-center text-base sm:text-sm bg-zinc-100 rounded-md hover:bg-zinc-200'>مقاله</Link>
              <Link href={'/'} className='border-zinc-800 p-2 flex justify-center items-center text-base sm:text-sm bg-zinc-100 rounded-md hover:bg-zinc-200'>مقاله</Link>
              <Link href={'/'} className='border-zinc-800 p-2 flex justify-center items-center text-base sm:text-sm bg-zinc-100 rounded-md hover:bg-zinc-200'>مقاله</Link>
            </div>
          </div>
          <div className=" flex flex-col gap-4 justify-center items-center shadow-md hover:shadow-lg border-2 p-5 rounded-lg">
            <h3 className=' text-blue-400'>شرکت درخبرنامه</h3>
            <hr className=' border-b-2 border-b-black' />
            <form action="" className=' w-full bg-zinc-200 flex justify-between items-center border-2 border-black rounded-md'>
              <input type="text" name="" id="" placeholder='ایمیل خودرا وارد کنید...' className='bg-transparent p-1 rounded-md outline-none text-sm border-2  w-full' />
              <IoSendOutline className='w-6 h-6 rotate-180' />
            </form>
          </div>

        </aside>
      </div>

    </>
  )
}

export default BlogLayout
