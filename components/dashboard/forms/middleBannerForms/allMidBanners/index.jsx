"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "./Box";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { data } from "autoprefixer";

const AllMidBanners = ({ setmidBanDetCtrl, setrandNumForBannerClick }) => {
   const goTopCtrl = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };
   const [banners, setbanners] = useState([]);
   const [pageNumber, setpageNumber] = useState(1);
   // const [numbersOfBtns, setnumbersOfBtns] = useState([-1]);
   // const [filteredBtns, setfilteredBtns] = useState([-1]);
   // const [allMidBnNumber, setallMidBnNumber] = useState(0);
   // const paginate = 10;

   useEffect(() => {
     axios.get(
         `https://file-shop.liara.run/api/middle-banners?pn=${pageNumber}`).then(d=> setbanners(d.data)).catch(e=> console.log(e));
         
   }, []);

   // useEffect(() => {
   //    if (numbersOfBtns[0] != -1 && numbersOfBtns.length > 0) {
   //       const arr = [];
   //       numbersOfBtns.map((n) => {
   //          if (
   //             n == 0 ||
   //             (n < pageNumber + 1 && n > pageNumber - 3) ||
   //             n == numbersOfBtns.length - 1
   //          ) {
   //             arr.push(n);
   //          }
   //       });
   //       setfilteredBtns(arr);
   //    }
   //    else if (numbersOfBtns.length == 0) {
   //       setfilteredBtns([]);
   //    }
   // }, [numbersOfBtns]);

   return (
      <div className=" flex flex-col gap-8">
         <div className=" flex justify-end">
            <div className=" w-32 h-10 rounded bg-indigo-500 flex justify-center items-center text-white">
               بنر
            </div>
         </div>
         <div className=" flex flex-col gap-6">
            {banners[0] == -1 ? (
               <div className=" flex justify-center items-center p-12">
                  <Image
                     alt="loading"
                     width={120}
                     height={120}
                     src={"/image/loading.svg"}
                  />
               </div>
            ) : banners.length < 1 ? (
               <div className=" flex justify-center items-center w-full p-8">
                  بنری موجود نیست...
               </div>
            ) : (
               banners.map((ba, i) => (
                  <Box
                     // setrandNumForBannerClick={setrandNumForBannerClick}
                     // setmidBanDetCtrl={setmidBanDetCtrl}
                     key={i}
                     data={ba}
                  />
               ))
            )}
         </div>
         <div className=" flex justify-center gap-4 items-center">
            buttons
         </div>
         {/* <ToastContainer
            bodyClassName={() => "font-[shabnam] text-sm flex items-center"}
            position="top-right"
            autoClose={3000}
            theme="colored"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         /> */}
      </div>
   );
};

export default AllMidBanners;
