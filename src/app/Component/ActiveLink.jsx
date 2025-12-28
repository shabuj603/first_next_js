"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react'

const ActiveLink = ({href, children}) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    
  return (
 
    <Link href={href} className={`hover:text-blue-600 ${isActive? " text-red-500":"text-gray-600"}`}>
    
    {children}</Link>
  )
}

export default ActiveLink