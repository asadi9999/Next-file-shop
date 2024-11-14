import React from 'react'
import Link from 'next/link'
import Image from 'next/image'




const BlogBox = () => {
    return (
        <article className='sliderItem' >
            <Link href={'/blog'} target='_blank'>
                <div className="relative h-[28rem] w-72 m-2 border-t-2 rounded-md shadow-md p-2 flex flex-col gap-0 hover:shadow-sm transition-all duration-300">
                    <div className=" right-0 rounded-lg">
                        <Image width={288} height={160} alt='slider6' src={'/products/ganj.jpg'} />
                    </div>
                    <div className="">
                        <p dir='rtl' className=' mb-5'>عنوان محصول هست این عنوان محصول هست این</p>
                        <div className='flex flex-row justify-between items-center w-full'>
                            <p className=' text-justify text-base sm:text-sm text-slate-500 line-clamp-6 leading-8'> 
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،  مورد استفاده قرار گیرد.
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،  مورد استفاده قرار گیرد.
                            </p>
                        </div>
                    </div>
                    <hr className=' border-2 mt-4 border-zinc-300'/>
                    <div className=" absolute mt-2 px-2 py-2 flex justify-between items-center w-full bottom-0">
                        <div className=" w-2/5 flex justify-start gap-3">
                        <span className=' bg-zinc-300 p-2 rounded-lg'>
                            1402/08/02
                        </span>
                        </div>
                        <div className=" w-3/5 flex justify-end items-center gap-3 px-2">
                            <span className=' bg-zinc-300 p-2 rounded-lg'>دیدگاه5</span>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default BlogBox
