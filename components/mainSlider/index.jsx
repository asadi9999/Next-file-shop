'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import './style.css'
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

SwiperCore.use([Autoplay]);

const SliderFour = () => {
    return (
        
            <section className=" container mx-auto flex justify-between items-center">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination
                    autoplay={{ delay: 3000 }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <div className="flex justify-center items-center w-full">
                            <Image className=''
                                src='/image/slider/slide1.jpg'
                                width={1520}
                                height={320}
                                alt='File Shop Logo'
                                objecfit='cover'
                                layout='fixed'
                                unoptimized={true}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center w-full">
                            <Image className=''
                                src='/image/slider/slide2.jpg'
                                width={1320}
                                height={320}
                                alt='File Shop Logo'
                                objecfit='cover'
                                layout='fixed'
                                unoptimized={true}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center w-full">
                            <Image className=''
                                src='/image/slider/slide3.jpg'
                                width={1320}
                                height={320}
                                alt='File Shop Logo'
                                objecfit='cover'
                                layout='fixed'
                                unoptimized={true}
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        
    );
};

export default SliderFour;
