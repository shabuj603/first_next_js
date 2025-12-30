'use client';
import { useState } from "react";
import Link from "next/link";
import ActiveLink from "./Component/ActiveLink";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const NavLink = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "UserList", href: "/userList" },
        { name: "Wallet", href: "/wallet" },
    ]
    const [open, setOpen] = useState(false);


    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo */}
                    <Link href="/">
                        MyApp
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {NavLink.map((link)=>{ 
                          <ActiveLink href="/">{link.name}</ActiveLink>
                            
                        })}
                         <ActiveLink href="/">Home</ActiveLink>
                         <ActiveLink href="/about">About</ActiveLink>
                        <ActiveLink href="/blog">Blog</ActiveLink>
                        <ActiveLink href="/userList">Contact</ActiveLink>
                        <ActiveLink href="/wallet">wallet</ActiveLink>
                        <ActiveLink href="/post">Post</ActiveLink>
                        
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden focus:outline-none"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white shadow">
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
                    <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
                    <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
                    <Link href="/userList" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
                </div>
            )}
        </nav>
    );
}
