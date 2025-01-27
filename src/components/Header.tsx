import Link from 'next/link'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <div className='bg-[#2A254B] text-emerald-500 py-4 sticky top-0'>
      {/* Links for larger screens */}
      <div className='hidden lg:flex lg:justify-between gap-4 md:gap-96 lg:ml-14 ml-4 lg:mr-14'>
        <div className='font-bold lg:text-2xl font-'>CodeCrafted</div>
        <ul className='flex lg:gap-10 gap-6 lg:text-xl'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/blogs'>Blogs</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
      </div>

      {/* Header for Mobile Screens */}
      <div className="flex lg:hidden items-center justify-between mr-2 ml-2">
        {/* Blog Name and Icons */}
        <div className="font-bold text-emerald-500 font-mono">CodeCrafted</div>

        {/* Hamburger Menu and Search Icon on Right */}
        <div className="flex items-center gap-4">
          
          <Sheet>
  <SheetTrigger> <Menu size={24}  /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
        
              <ul className="flex flex-col gap-3 text-white ">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/blogs"}>Blogs</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        </div>
      </div>
    </div>
  )
}

export default Header