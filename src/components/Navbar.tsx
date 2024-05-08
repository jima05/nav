"use client";

import Image from 'next/image'; // Import Image from Next.js
import { useState } from 'react';

import logo from '@/assets/images/logo.svg';
import todoicon from '@/assets/images/icon-todo.svg';
import calendericon from '@/assets/images/icon-calendar.svg';
import remindericon from '@/assets/images/icon-reminders.svg';
import planningicon from '@/assets/images/icon-planning.svg';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import { useAutoAnimate } from '@formkit/auto-animate/react'

type NavItems = {
  label: string;
  link?: string;
  children?: NavItems[];
  iconImage?: string;
};

const navItems :NavItems[] = [
    {
        label: "Features",
        children: [
            {
                label: "Todo",
                link: "#",
                iconImage: todoicon,
            },
            {
                label: "Calendar",
                link: "#",
                iconImage: calendericon,
            },
            {
                label: "Reminder",
                link: "#",
                iconImage: remindericon,
            },
            {
                label: "Planning",
                link: "#",
                iconImage: planningicon,
            }]

    },
    {
        label: "Company",
        children: [
            {
                label: "History",
                link: "/company/history",
            },
            {
                label: "Our Team",
                link: "/company/team",
            },
            {
                label: "Blog",
                link: "/company/blog",
            }
        ]
    },
    {
        label: "Career",
        link: "/career",
    },
    {
        label: "About",
        link: "/about",
    }
]


const Navbar = () => {
    const [animationParent] = useAutoAnimate();
    const [isSideMenuOpen, setSideMenu ]= useState(false);

    function openSideMenu() {
        setSideMenu(true);
    }
    function closeSideMenu() {
        setSideMenu(false);
    }
  return (
    <div className='mx-auto flex w-full max-w-7x1 justify-between px-4 py-5 text-sm'>
        {/* LeftSide */}
        <section ref={animationParent} className="flex items-center gap-10">
            {/* Logo */}
           <Link href={"/"}> <Image src={logo} alt="Logo" width={100} height={100} /></Link> {/* Pass logo as src */}
            
            {/* NavItems */}
            <div className='hidden md:flex items-center gap-4 transition-all'>
                {navItems.map((d,i)=>
                <Link key={i} href={d.link ?? "#"} className='relative group px-2 py-3 transition-all'>
                    <p className='flex items-center gap-2 cursor-pointer text-neutral-500
                     group-hover:text-black/90'>
                        <span>{d.label}</span>
                        {d.children && (
                        <IoIosArrowDown className='rotate-180 transition-all group-hover:rotate-0' />)}
                    </p>
                    {/* Dropdown */}
                    {d.children && ( 
                    <div className='absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg
                     bg-white py-3 shadow-md transition-all group-hover:flex'>
                        {d.children.map((ch,i)=>  
                        <Link key={i} href={ch.link ?? "#"} className='flex items-center cursor-pointer py-1 pl-6 pr-8 text-neutral-500 hover:text-black/90'>
                            {/* Image */}
                            {ch.iconImage && (
                            <Image src={ch.iconImage ?? ""} alt="item-icon"/>)}
                            {/* Item */}
                            <span className="whitespace-nowrap pl-3">{ch.label}</span>
                        </Link> )}
                    </div>)}
                </Link> 

                   )}

            </div>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}

        </section>

        {/* RightSide */}
        <section className="hidden md:flex items-center gap-8">
            <button className="h-fit text-neutral-400 transition-all hover:text-black/90">Login</button>
            <button className="h-fit rounded-xl border-2 text-neutral-400 px-4 py-2 transition-all hover:border-black hover:text-black/90">Register</button>
        </section>

        <FiMenu onClick={openSideMenu} className='cursor-pointer text-4xl md:hidden' />
    </div>
  );
}

function MobileNav({closeSideMenu}: {closeSideMenu: ()=>void}) {
    return (
        <div className='fixed top-0 left-0 flex w-full h-full min-h-screen justify-end bg-black/60 md:hidden'>
            <div className='h-full w-[65%] bg-white px-4 py-4'>
                <section className="flex justify-end" >
                <AiOutlineClose onClick={closeSideMenu} className='cursor-pointer text-4xl' />
                </section>
                            
            <div className='flex flex-col text-base gap-2 transition-all'>
                {navItems.map((d,i)=>
                <SingleNavItem key={i} label={d.label} iconImage={d.iconImage} link={d.link}>{d.children}</SingleNavItem> )}

            </div>
            <section className="flex flex-col gap-8 mt-4 items-center">
            <button className="h-fit text-neutral-400 transition-all hover:text-black/90">Login</button>
            <button className="w-full max-w-[200px] rounded-xl border-2 text-neutral-400 px-4 py-2 transition-all hover:border-black hover:text-black/90">Register</button>
        </section>
            </div>
        </div>
    );
}

function SingleNavItem(d: NavItems){
    const [animationParent] = useAutoAnimate()
    const [isItemOpen,setItem] = useState(false);

    function toggleItem(){
        setItem(!isItemOpen);
    }

    return (
        <Link ref={animationParent} onClick={toggleItem} href={d.link ?? "#"} className='relative px-2 py-3 transition-all'>
        <p className='flex items-center gap-2 cursor-pointer text-neutral-500
         group-hover:text-black/90'>
            <span>{d.label}</span>
            {d.children && (
            <IoIosArrowDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`} />)}
        </p>
        {/* Dropdown */}
        {isItemOpen && d.children && ( 
        <div className='w-auto flex-col gap-1 rounded-lg
         bg-white py-3 transition-all flex'>
            {d.children.map((ch,i)=>  
            <Link key={i} href={ch.link ?? "#"} className='flex items-center cursor-pointer py-1 pl-6 pr-8 text-neutral-500 hover:text-black/90'>
                {/* Image */}
                {ch.iconImage && (
                <Image src={ch.iconImage ?? ""} alt="item-icon"/>)}
                {/* Item */}
                <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </Link> )}
        </div>)}
    </Link>  
    )
}

export default Navbar;