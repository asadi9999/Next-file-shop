import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const CatBox = () => {
    return (
        <>
            <Link href={'/'}>
                <div className=" flex justify-between  items-center bg-zinc-200 rounded-md p-3 gap-3 w-80 transition-all duration-400 hover:bg-yellow-300 ">
                    <div className=" flex flex-col justify-between items-center gap-2">
                        <h2 className=' text-black text-right' >فایل لایه باز فتوشاپ</h2>
                        <p className=' text-gray-700 text-right' >وکتورهای گرافیکی قدرتمند</p>
                    </div>
                    <div className=" w-16">
                        <Image src={'/image/categories/photoshop2-min.png'} width={60} height={60} alt='vector' objectFit='cover' />
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CatBox
