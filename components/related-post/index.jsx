'use client'
import React from 'react'
import BlogBox from '../newBlog/blogBox'
import '../../styles/custom.css'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { useRef } from 'react'
import Link from 'next/link'

const RelatedPost = ({title}) => {
    const caruselRef = useRef()
    const caruselSwitcher = (data) => {
        if (caruselRef.current) {
            const width = caruselRef.current.offsetWidth;
            caruselRef.current.scrollTo(
                caruselRef.current.scrollLeft + width * data, 0
            )
        }
    }
    return (
        <>
            <main className=' container mx-auto mt-10 mb-10' dir='rtl'>
                <div className='w-full flex flex-col gap-5 px-2'>
                    <header className=' text-orange-400 text-2xl flex justify-between items-center'>
                            <h2 className=' text-xl p-4'>{title}</h2>
                        <div className=" flex justify-between items-center gap-2">
                            <div dir='rtl' className=" flex justify-between items-center gap-2">
                                <FaChevronRight onClick={() => { caruselSwitcher(1) }} className=' bg-zinc-300 transition-all duration-300 hover:bg-orange-400 w-10 h-10 rounded hover:text-white cursor-pointer' />
                                <FaChevronLeft onClick={() => { caruselSwitcher(-1) }} className=' bg-zinc-300 transition-all duration-300 hover:bg-orange-400 w-10 h-10 rounded hover:text-white cursor-pointer' />
                            </div>
                        </div>
                    </header>
                    <div ref={caruselRef} className='sliderContainer w-full max-w-max overflow-scroll ' >
                        <div className=' flex justify-between items-center gap-4 px-4'>
                            <BlogBox />
                            <BlogBox />
                            <BlogBox />
                            <BlogBox />
                            <BlogBox />
                            <BlogBox />
                            <BlogBox />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default RelatedPost
