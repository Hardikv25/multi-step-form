'use client'

import React from 'react'
import { Button } from '@/Components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Dashboard' },
  { href: '/forms', label: 'Form' },
]


const Header = () => {
  const pathname = usePathname();

  return (
    <div className='flex justify-between py-4 px-4 sm:px-6 border-b border-gray-200 bg-white'>
      <h1 className='flex items-center sm:w-auto text-[24px] sm:text-2xl font-bold'>Multi-Step Form</h1>
      <div className='space-x-4 flex items-center sm:w-auto '>
        {navLinks.map((link, index) => {
          return (
            <Link key={index} href={link.href}>
              <Button
                className={`text-[16px] sm:text-sm p-[22px] sm:p-5  ${pathname === link.href
                  ? 'bg-gray-950 hover:bg-gray-800 text-white'
                  : 'bg-white hover:bg-gray-50 text-black border border-gray-200'
                  }`}
              >
                {link.label}
              </Button>
            </Link>
          )
        })}

      </div>
    </div>
  )
}

export default Header
