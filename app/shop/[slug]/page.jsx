import React from 'react'
import BreadCrumb from '@/components/breadcrumb'
import Image from 'next/image'
import { GrView } from "react-icons/gr";
import { FaComment } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import RelatedPost from '@/components/related-post';
import { MdOutlineVerified } from "react-icons/md";

const SingleBlog = () => {
  return (
    <>
      <div className='flex flex-col gap-8'>
        <BreadCrumb seconTitle={'فروشگاه'} secondLink={'/blog'} title={'فایل ادوبی ایکس دی'} />
        <section className=' flex flex-col md:flex-row md:justify-center items-center'>
          <div className=" w-full flex justify-between items-start gap-x-5">
            <div className=" w-[60%] flex justify-start">
              <Image src={'/image/ganj.jpg'} width={600} height={300} className='w-full rounded-md' />
            </div>
            <div className=" w-[40%] flex flex-col justify-center items-start gap-10 pr-2">
              <div className=""><h2>کتاب گنج نوشته جلال ال احمد</h2></div>
              <div className=" flex flex-col justify-center items-center md:justify-between gap-4">
                {/* ....................................................................... */}
                <div className="flex justify-between gap-10 w-full ">
                  <div className=" flex justify-start gap-10">
                    <div className='w-36 flex justify-center items-center gap-1'>
                      <MdOutlineVerified />
                      <h3>فرمت فایل</h3>
                    </div>
                  </div>
                  <div className=" flex justify-end">
                    <div className=' flex justify-between items-center gap-1'>
                      <h3>PSD</h3>
                    </div>
                  </div>
                </div>
                {/* ................................................................ */}
                <div className="flex justify-between gap-10 w-full ">
                  <div className=" flex justify-start gap-10">
                    <div className='w-36 flex justify-center items-center gap-1'>
                      <MdOutlineVerified />
                      <h3>اندازه فایل</h3>
                    </div>
                  </div>
                  <div className=" flex justify-end">
                    <div className=' flex justify-between items-center gap-1'>
                      <h3>1200*980</h3>
                    </div>
                  </div>
                </div>
                {/* ................................................................ */}
                <div className="flex justify-between gap-10 w-full ">
                  <div className=" flex justify-start gap-10">
                    <div className='w-36 flex justify-center items-center gap-1'>
                      <MdOutlineVerified />
                      <h3>حجم فایل</h3>
                    </div>
                  </div>
                  <div className=" w-[50%] flex justify-end items-center">
                    <h3>12 MB</h3>
                  </div>
                </div>
                {/* ................................................................... */}
              </div>
            </div>
          </div>
        </section>
        <section className=' flex flex-col items-center md:flex-row md:justify-between p-3 '>
          <div className=" flex justify-center items-center bg-slate-100 rounded-md transition-all duration-300 p-3">
            <div className=" flex justify-start items-center">
              <Image src={'/image/icons/feedback.png'} width={600} height={300} className='w-full rounded-md' />
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" font-bold text-sm sm:text-base">محصولات اورجینال</div>
              <div className=" text-base sm:text-xs">برترین های دنیای وب</div>
            </div>
          </div>
          <div className=" flex justify-center items-center bg-slate-100 rounded-md transition-all duration-300 p-3">
            <div className=" flex justify-start items-center">
              <Image src={'/image/icons/target1.png'} width={600} height={300} className='w-full rounded-md' />
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" font-bold text-sm sm:text-base">بالاترین کیفیت</div>
              <div className=" text-base sm:text-xs">تاثیرگذارترین مورد درموفقیت</div>
            </div>
          </div>
          <div className=" flex justify-center items-center bg-slate-100 rounded-md transition-all duration-300 p-3">
            <div className=" flex justify-start items-center">
              <Image src={'/image/icons/trophy.png'} width={600} height={300} className='w-full rounded-md' />
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" font-bold text-sm sm:text-base">پشتیبانی فوق سریع</div>
              <div className=" text-base sm:text-xs">در کمتر از30دقیقه</div>
            </div>
          </div>
        </section>
        <section >
          <div className=' flex flex-col gap-8 shadow-[0px_0px_8px_rgba(0,0,0,0.25)] rounded-md'>
            <h2 className=' text-xl p-4'>توضیحات کامل</h2>
            <p className=' text-justify p-2 leading-8'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای  و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای  و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای  و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای  و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>

        </section>
        <section className=' flex flex-col gap-8'>
          <RelatedPost title={'محصولات مرتبط'} />
        </section>
        <section className=' flex flex-col gap-8 bg-zinc-100 p-2 rounded-md'>
          <h2 className=' text-xl p-4'>دیدگاه ها</h2>
          <form action="" method="post"></form>
        </section>
      </div>
    </>
  )
}

export default SingleBlog
