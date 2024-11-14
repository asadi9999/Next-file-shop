import React from 'react'
import BlogBox from './blogBox'
import Link from 'next/link'
import '../../styles/custom.css'
const NewBlog = () => {
    return (
        <>
            <section className='w-full flex flex-col flex-wrap gap-5 px-2'>
                <header className=' text-orange-400 text-2xl flex justify-between items-center'>
                    <h2 className='border-r-4 border-orange-500 pr-2'>آخرین مقالات</h2>
                    <div className=" flex justify-between items-center gap-2">
                        <Link href={`/`} className='bg-orange-300 text-white rounded-md border-none h-full px-2 py-1 hover:bg-orange-500 hover:transition-all duration-300'> برو به وبلاگ</Link>
                    </div>
                </header>
                <div className='sliderContainer w-full max-w-max overflow-scroll ' >
                    <div className='sliderContainer flex justify-between items-center flex-wrap gap-1 px-4'>
                        <BlogBox />
                        <BlogBox />
                        <BlogBox />
                        <BlogBox />
                        <BlogBox />
                        <BlogBox />
                        <BlogBox />
                        <BlogBox />
                        <BlogBox />
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default NewBlog
