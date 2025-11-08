import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>

        <div>
            <img  src={assets.files} alt="logo" className='w-33 sm:w-60'/>
            <p className='max-w-[430px] mt-6'>Everyone has a story to tell — a thought, an experience, or an idea that deserves to be heard. Blogging isn’t just about writing; it’s about expressing yourself, connecting with others, and making an impact.
Whether you want to share your daily experiences, teach something you love, or inspire others through your journey, your words have the power to create change.</p>
        </div>

        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
            {footer_data.map((section, index)=> (
                <div key={index}>
                    <h3 className='font-semibold text-base text-yellow-600 md:mb-5 mb-2'>{section.title}</h3>
                    <ul className='text-sm space-y-1'>
                        {section.links.map((link, i)=> (
                            <li key={i}>
                                <a href="#" className='hover:underline transition'>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>


      </div>
      <p className='py-4 text-center text-sm md:text-base text-red-500/80'>Copyright 2025 © King Of The Hills - All Right Reserved.</p>
    </div>
  )
}

export default Footer
