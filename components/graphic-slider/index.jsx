'use client'
import React from 'react'
import GraphicSlideBox from '../graphic-slider-box/Box'
import '../../styles/custom.css'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { useRef } from 'react'
import Link from 'next/link'

const GraphicSlider = () => {
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
            
                <section className='w-full flex flex-col gap-5 px-2 py-3 bg-yellow-200'>
                    <header className=' text-orange-400 text-2xl flex justify-between items-center'>
                        <h2 className='border-r-4 border-orange-500 pr-2'>فایلهای گرافیکی</h2>
                        <div className=" flex justify-between items-center gap-2">
                            <div dir='rtl' className=" flex justify-between items-center gap-2">
                                <FaChevronRight onClick={() => { caruselSwitcher(1) }} className=' bg-zinc-300 transition-all duration-300 hover:bg-orange-400 w-10 h-10 rounded hover:text-white cursor-pointer' />
                                <FaChevronLeft onClick={() => { caruselSwitcher(-1) }} className=' bg-zinc-300 transition-all duration-300 hover:bg-orange-400 w-10 h-10 rounded hover:text-white cursor-pointer' />
                            </div>
                            <Link href={'/'} className='bg-indigo-500 text-white rounded-md border-none h-full px-2 py-1 hover:bg-indigo-600 hover:transition-all duration-300'>مشاهده همه</Link>
                        </div>
                    </header>
                    <div ref={caruselRef} className='sliderContainer w-full max-w-max overflow-scroll ' >
                        <div className=' flex justify-between items-center gap-4 px-4'>
                            <GraphicSlideBox/>
                            <GraphicSlideBox/>
                            <GraphicSlideBox/>
                            <GraphicSlideBox/>
                            <GraphicSlideBox/>
                            <GraphicSlideBox/>
                            <GraphicSlideBox/>
                            <GraphicSlideBox/>
                        </div>
                    </div>
                </section>
           
        </>
    )
}

export default GraphicSlider
