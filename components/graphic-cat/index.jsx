import React from 'react'
import CatBox from './Box'
const MainCategories = () => {
  return (
    <>
        <section className='flex sm:justify-between justify-center items-center gap-2 flex-wrap container mx-auto'>
          <CatBox/>
          <CatBox/>
          <CatBox/>
          <CatBox/>
          <CatBox/>
          <CatBox/>
          <CatBox/>
          <CatBox/>
        </section>
    </>
  )
}

export default MainCategories
