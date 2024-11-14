'use client'
import React from 'react'
import { useState } from 'react'
import '../../styles/globals.css'
import { Input } from 'postcss'

const Firstarticle = () => {
  const [Color, setColor] = useState('red')
  const [count, setCount] = useState(524630)
  const [bgColor,setBgColor] = useState('red')
  const [chnFont,setchnFont] = useState(14)
  return (
    <>

      <div className=' container mx-auto'>
        <h1>first article</h1>
        <button onClick={() => setColor(Color === 'red' ? 'blue' : 'red')} className=' bg-orange-300 p-2 rounded-md hover:bg-orange-500 hover:transition-all duration-300'>change color</button>
        <p style={{ color:  Color  }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iusto, labore eligendi exercitationem rem sit molestias voluptatum distinctio earum voluptatem!
        </p>
        <div className=" flex justify-between items-center bg-zinc-100 p-5">
          <button onClick={() => setCount(count * 2 /100)} className=' w-28 bg-blue-300 p-2 rounded-md hover:bg-blue-500 hover:transition-all duration-300'>+</button>
          <span>{count}</span>
        </div>
        <div className="flex justify-between items-center bg-zinc-100 p-5">
          <button on onClick={() => setBgColor(bgColor === 'red' ? 'blue' : 'red')} className=' bg-orange-300 p-2 rounded-md'>change bg color</button>
          <p style={{backgroundColor:bgColor} }>
            {bgColor}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, rerum.
          </p>
        </div>
        <div className="flex justify-between items-center bg-zinc-100 p-5">
          <button on onClick={() => setchnFont(chnFont === 14 ? 22 : 14)} className=' bg-orange-300 p-2 rounded-md'>change font size</button>
          <p style={{fontSize:chnFont} }>
            {chnFont}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, inventore!
          </p>
        </div>

      </div>

    </>
  )
}

export default Firstarticle
