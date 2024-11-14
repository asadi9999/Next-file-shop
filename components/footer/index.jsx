'use client'
import React from 'react'
import Image from 'next/image'
import './footer.css'
import '/styles/globals.css'
import Link from 'next/link'
import { RiArrowLeftWideFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { HiOutlineArrowUp } from "react-icons/hi";


const Footer = () => {
    const goTopCtrl = () => {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
            });
    };
    return (
        <>
            <footer className=' container mx-auto flex flex-col gap-8 mt-8 py-6 px-4'>
                <div className=" flex flex-col justify-between items-center bg-zinc-100 p-3 rounded-lg md:flex-row gap-8 md:gap-2">
                    <div className=" flex flex-col justify-center items-center gap-4 w-2/6 max-w-max">
                        <div className=" flex flex-row justify-center items-center  max-w-72">
                            <Image alt='site logo' src={'/image/logo.png'} width={100} height={100} className=' bg-cover' />
                        </div>
                        <p className=" text-center">ه نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفح</p>
                    </div>
                    <div className="flex flex-col gap-5 w-1/6 h-full max-w-max">
                        <h2 className=' font-bold'>دسترسی سریع</h2>
                        <ul className=' flex flex-col gap-1'>
                            <li>
                                <Link href={'/about'} className='w-32 hover:gap-2 flex items-center gap-1'>
                                    <MdOutlineKeyboardArrowLeft />
                                    <span>درباره ما</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/contact'} className='w-32 hover:gap-2 flex items-center gap-1'>
                                    <MdOutlineKeyboardArrowLeft />
                                    <span>تماس با ما</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/help'} className='w-32 hover:gap-2 flex items-center gap-1'>
                                    <MdOutlineKeyboardArrowLeft />
                                    <span>حریم خصوصی</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/blog'} className='w-32 hover:gap-2 flex items-center gap-1'>
                                    <MdOutlineKeyboardArrowLeft />
                                    <span>وبلاگ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className=" flex flex-col gap-5 justify-center items-center h-full w-1/6 max-w-max">
                        <h2 className=' font-bold'>راهنمای خرید</h2>
                        <ul className=' flex flex-col gap-3'>
                            <li>
                                <Link href={'/help'} className=' hover:gap-2 w-44 flex items-center gap-1'>
                                    <MdOutlineKeyboardArrowLeft />
                                    <span>سوالات متداول</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/help'} className=' hover:gap-2 w-44 flex items-center gap-1'>
                                    <MdOutlineKeyboardArrowLeft />
                                    <span>چگونه خرید کنم؟</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/help'} className=' hover:gap-2 w-44 flex items-center gap-1'>
                                    <MdOutlineKeyboardArrowLeft />
                                    <span>قوانین سایت</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className=" flex justify-center items-center gap-5 w-2/6">
                        <Image alt='' src={'/image/Licenses/1.png'} width={100} height={100} className=' bg-cover' />
                        <Image alt='' src={'/image/Licenses/2.png'} width={100} height={100} className=' bg-cover' />
                    </div>
                </div>
                <div className=" flex justify-center items-center">
                    <p className=" text-center w-full">
                        تمام حقوق مادی ومعنوی این وبسایت متعلق به فروشگاه کلیک می باشدclickshop.ir
                    </p>
                    <HiOutlineArrowUp onClick={()=>goTopCtrl()} className=' fixed left-2 bottom-2 rounded-md cursor-pointer bg-yellow-500 border-2 border-black p-2 w-12 h-12  hover:bg-indigo-300 hover: text-white transition-all duration-300 '/>
                </div>

            </footer>
        </>
    )
}

export default Footer
