import React from 'react'
import Image from 'next/image'
import { HiShoppingBag } from "react-icons/hi2";
import { IoMdResize } from "react-icons/io";
import { MdFileCopy } from "react-icons/md";
import { TbBrush } from "react-icons/tb";
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineSaveAlt } from "react-icons/md";


const GraphicSlideBox = () => {
    return (
        <>
            <article className='sliderItem' >
                <Link href={'/shop'} target='_blank' className=''>
                    <div className="relative bg-slate-200 border-2  h-[30rem] w-72 m-2 rounded-md shadow-md pt-3 pr-2 pb-2 flex flex-col gap-3 hover:shadow-sm transition-all duration-300">
                        <div className="text-center mx-auto">
                            <div className=" flex justify-center items-center w-full">
                                <Image width={288} height={160} alt='slider6' src={'/products/ganj.jpg'} />
                            </div>
                            <div className=" my-2">
                                <h3 dir='rtl' className=' line-clamp-3'>صفحه ساز المنتور ورد پرس بهتراز کامپوزر</h3>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between items-center w-full'>
                            <div className=" flex justify-start">
                                <TbBrush className=' mr-1 w-10 h-10 p-2 rounded-md transition-all duration-300 hover:bg-orange-300 text-indigo-600 hover:text-white cursor-pointer' />
                            </div>
                            <div className=' flex justify-end p-2 text-black rounded-tr-md rounded-br-md'>PSD</div>
                        </div>
                        <div className='flex flex-row justify-between items-center w-full'>
                            <div className=" flex justify-start">
                                <IoMdResize className=' mr-1 w-10 h-10 p-2 rounded-md transition-all duration-300 hover:bg-orange-300 text-indigo-600 hover:text-white cursor-pointer' />
                            </div>
                            <div className=' flex justify-end p-2 text-black rounded-tr-md rounded-br-md'>720*1080پیکسل</div>
                        </div>
                        <div className='flex flex-row justify-between items-center w-full'>
                            <div className=" flex justify-start">
                                <MdFileCopy className=' mr-1 w-10 h-10 p-2 rounded-md transition-all duration-300 hover:bg-orange-300 text-indigo-600 hover:text-white cursor-pointer' />
                            </div>
                            <div className=' flex justify-end p-2 text-black rounded-tr-md rounded-br-md'>10 مگ</div>
                        </div>
                        <div className=" flex flex-row justify-start gap-2">
                            <div className=" bg-zinc-300 rounded-lg p-2">فتوشاپ</div>
                            <div className=" bg-zinc-300 rounded-lg p-2">ایلستریتور</div>
                        </div>
                        <div className=" absolute mt-2 px-2 py-2 flex justify-between items-center w-full bottom-0">
                            <div className=" w-2/5 flex justify-start gap-3">
                                <div className=" text-indigo-400 text-2xl hover:bg-orange-300 hover:text-white hover:transition-all duration-300 p-1 rounded-md"><IoIosSearch /></div>
                                <div className="text-indigo-400 text-2xl hover:bg-orange-300 hover:text-white hover:transition-all duration-300 p-1 rounded-md"><MdOutlineSaveAlt /></div>
                            </div>
                            <div className=" w-3/5 flex justify-end items-center gap-3 px-2">
                                <div className="text-indigo-400 text-2xl hover:bg-orange-300 hover:text-white hover:transition-all duration-300 p-1 rounded-md"><HiShoppingBag /></div>
                                <div className="text-indigo-400 text-xl bg-zinc-300 p-2 rounded-tr-md rounded-br-md">2000تومان</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </article>
        </>
    )
}

export default GraphicSlideBox
