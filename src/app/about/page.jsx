"use client"
import React from 'react'
import { Roboto } from 'next/font/google'
import Button from '@/app/Component/button';
import Image from 'next/image';
import thumb from '../../../public/images/1.jpg';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const page = () => {
  return (
    <div>About page here
      <div className='w-[400px] h-[400px] bg-gray-200'>
     <Image src={thumb} alt="thumb" placeholder="blur"/>
     </div>
     <p className={roboto.className}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium aliquam quos iure dignissimos impedit saepe dicta iste eos similique nam!

     </p>
      <Button text='Click' onClick={()=>alert("hello world")} className='bg-blue-300 p-4 rounded'>Click Here</Button>
    </div>
  )
}

export default page