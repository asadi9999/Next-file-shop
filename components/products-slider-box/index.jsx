import React from 'react'
import Image from 'next/image'
import { HiShoppingBag } from "react-icons/hi2";
import Link from 'next/link';
import { MdBookmarkAdd } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const SlideBox = () => {
    return (
        <>
            <article className='sliderItem' >
                <Link href={'/shop'} target='_blank'>
                    <div className=" bg-white relative h-[28rem] w-72 m-2 rounded-md shadow-md pt-3 pr-2 pb-2 flex flex-col gap-8 hover:shadow-sm transition-all duration-300">
                        <div className=" flex justify-center items-center">
                            <Image width={288} height={160} alt='slider6' src={'/products/ganj.jpg'} />
                        </div>
                        <div className="">
                            <h3 dir='rtl' className=' mb-5 line-clamp-3 text-justify px-1'>عنوان محصول هست این عنوان محصول هست  عنوان محصول هست این عنوان محصول عنوان محصول هست این عنوان محصول عنوان محصول هست این عنوان محصول این</h3>
                        </div>
                        
                        <div className=" flex justify-start items-center gap-2 w-full">
                            <div className=" bg-zinc-300 rounded-md p-2">رمانی</div>
                            <div className=" bg-zinc-300 rounded-md p-2">داستانی</div>
                            <div className=" bg-zinc-300 rounded-md p-2">آل احمد</div>
                        </div>
                        <div className=" left-0 w-full absolute bottom-0 flex justify-between items-center gap-0 py-1">
                            <div className="flex justify-start items-center gap-2 ">
                                <MdBookmarkAdd className='mr-1 w-10 h-10 p-2 rounded-md bg-zinc-100 transition-all duration-300 hover:bg-orange-300 text-indigo-600 hover:text-white cursor-pointer' />
                                <CiSearch className='mr-1 w-10 h-10 p-2 rounded-md bg-zinc-100 transition-all duration-300 hover:bg-orange-300 text-indigo-600 hover:text-white cursor-pointer' />
                            </div>
                            <div className='flex justify-end items-center gap-2'>
                                <HiShoppingBag className=' mr-1 w-10 h-10 p-2 rounded-md bg-zinc-100 transition-all duration-300 hover:bg-orange-300 text-indigo-600 hover:text-white cursor-pointer' />
                                <div className='bg-zinc-500 p-2 text-white rounded-tr-md rounded-br-md'>5000تومان</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </article>
        </>
    )
}

export default SlideBox


