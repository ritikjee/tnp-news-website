import React from 'react'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'

function HeroSection({ title, content, url,imgUrl }) {
  return (



    <section className={`relative  flex items-center bg-neutral px-2 py-20`}>
      <button className='btn btn-primary hidden md:flex'><AiOutlineLeft/></button>
      <div className='flex flex-col items-center'>
      <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-white text-2xl font-extrabold  ">
            {title}


          </h1>

          <p className="mx-auto text-white mt-4 p-7 max-w-xl  sm:text-xl/relaxed">
            {content}
          </p>

         
        </div>
        <div>
          <img src={imgUrl} alt="no-img" />
        </div>
        </div>
        <div className='flex gap-10 py-10'>
        <button className='btn btn-primary md:hidden '><AiOutlineLeft/></button>
        <button className='btn btn-primary'>
         <a href={url}> Read More</a>
        </button>
        <button className='btn btn-primary md:hidden'><AiOutlineRight/></button>
        </div> 
      </div>
      <button className='btn btn-primary hidden md:flex'><AiOutlineRight/></button>
    </section>


  )
}

export default HeroSection