'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function Banner() {
  return (
    <div className="max-w-[95%] mx-auto rounded-2xl bg-[url('https://res.cloudinary.com/dz1fy2tof/image/upload/v1733655960/brooke-lark-nTZOILVZuOg-unsplash_urjjyk.jpg')] bg-cover bg-no-repeat object-fill min-h-[calc(100vh-100px)] flex items-center justify-center">
      {/* content */}
      <div className='flex items-center justify-center rounded-2xl bg-gradient-to-tl from-[#000000CC] to-[#00000099]  min-h-[calc(100vh-100px)] w-full'>
        <div className='text-center space-y-4 p-10'>
          <h3 className='text-xl md:text-2xl font-medium text-[#00A149]'>
            <Typewriter
              words={['Delicious Recipes', 'Healthy Meals', 'Quick Snacks', 'Tasty Desserts', 'Fresh Ingredients', 'Flavorful Dishes']}
              loop={Infinity}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
          <h1 className='text-2xl md:text-5xl font- text-white'>Savor the Taste of Fresh <br /> Homemade Goodness.</h1>
          <p className='bg-gradient-to-r from-[#3cda83] to-[#fa2222] bg-clip-text text-transparent text-balance'>Nourishing Your Body and Pleasing Your Senses <br /> with Wholesome, Flavorful Meals</p>
          <button className='btn btn-sm md:btn-md bg-[#D1212166] border-[#D12121] text-[#f83333] border-2 hover:bg-[#D1212199] hover:border-[#D12121]'>Browse Menu</button>
        </div>
      </div>
    </div>
  )
}
