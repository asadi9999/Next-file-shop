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
          <form action="" className='bg-zinc-200 flex justify-between items-center border-2 border-black rounded-md'>
            <input type="text" name="" id="" placeholder='جستجو دروبلاگ...' className='bg-transparent p-1 rounded-md outline-none text-sm border-2  w-full' />
            <LuSearch className='w-6 h-6' />
          </form>
          <div className=" flex flex-col gap-4 justify-center items-center shadow-md hover:shadow-lg border-2 p-5 rounded-lg">
            <h3 className=' text-right'>توضیحات خلاصه</h3>
            <hr />
            <p className='leading-8 text-justify text-base sm:text-sm'>
              سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال
            </p>
          </div>
          <div className=" flex flex-col gap-4 justify-center items-center shadow-md hover:shadow-lg border-2 p-5 rounded-lg">
            <h3 className=' text-blue-400'>پربازدیدترین مقالات</h3>
            <hr />
            <ul className=' flex flex-col gap-3'>
              <li>
                <Link href={'/'} className=' border-r-2 border-zinc-800 p-2 '>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</Link>
              </li>
              <li>
                <Link href={'/'} className=' border-r-2 border-zinc-800 p-2 '>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</Link>
              </li>
              <li>
                <Link href={'/'} className=' border-r-2 border-zinc-800 p-2 '>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</Link>
              </li>
            </ul>
          </div>
          <div className=" flex flex-col gap-4 justify-center items-center shadow-md hover:shadow-lg border-2 p-5 rounded-lg">
            <h3 className=' text-blue-400'>پرفروشترین محصولات</h3>
            <hr />
            <ul className=' flex flex-col gap-3'>
              <li>
                <Link href={'/'} className=' border-r-2 border-zinc-800 p-2 '>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</Link>
              </li>
              <li>
                <Link href={'/'} className=' border-r-2 border-zinc-800 p-2 '>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</Link>
              </li>
              <li>
                <Link href={'/'} className=' border-r-2 border-zinc-800 p-2 '>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</Link>
              </li>
            </ul>
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
