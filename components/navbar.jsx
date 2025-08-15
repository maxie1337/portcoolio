import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react"


export function Navbar({isDarkMode, setIsDarkMode}){

    const[isScroll, setIsScroll] = useState(false);

    const sideMenuRef = useRef();

    const openMeny = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

     const closeMeny = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=> {
        window.addEventListener("scroll", ()=> {
            if(scrollY > 50) {
                setIsScroll(true)
            }
            else {
                setIsScroll(false)
            }
        })

    },[])

    return(
        <>
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
         <Image src={assets.header_bg_color} alt="" className="w-full"/>
        </div>

        <nav  className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>

            <a href="#home">
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-36 cursor-pointer mr-14"/>
            </a>
        
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white dark:bg-transparent"}`}>
            <li><a className="font-Ovo hover:text-gray-600 dark:hover:text-gray-300" href="#home">Hem</a></li>
            <li><a className="font-Ovo hover:text-gray-600 dark:hover:text-gray-300" href="#about">Om mig</a></li>
            <li><a className="font-Ovo hover:text-gray-600 dark:hover:text-gray-300" href="#services">Mina kunskaper</a></li>
            <li><a className="font-Ovo hover:text-gray-600 dark:hover:text-gray-300" href="#work">Portfolio</a></li>
            <li><a className="font-Ovo hover:text-gray-600 dark:hover:text-gray-300" href="#contact">Kontakta mig</a></li>
        </ul>

        <div className="flex items-center gap-4">

            <motion.button
            whileHover={{scale: 1.10}}
            onClick={()=> setIsDarkMode(prev => !prev)}>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6 hover:cursor-pointer" />
            </motion.button>

            <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo hover:bg-lightHover dark:border-white dark:hover:bg-darkHover">Kontakt<Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" /></a>

            <button className="block md:hidden ml-3" onClick={openMeny}>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
            </button>
        </div>


        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white">

            <div className="absolute right-6 top-6" onClick={closeMeny}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-5 cursor-pointer"/>
            </div>

            <li><a className="font-Ovo" onClick={closeMeny} href="#home">Hem</a></li>
            <li><a className="font-Ovo" onClick={closeMeny} href="#about">Om mig</a></li>
            <li><a className="font-Ovo" onClick={closeMeny} href="#services">Mina kunskaper</a></li>
            <li><a className="font-Ovo" onClick={closeMeny} href="#work">Portfolio</a></li>
            <li><a className="font-Ovo" onClick={closeMeny} href="#contact">Kontakta mig</a></li>

        </ul>

        </nav>
        </>
    )
}