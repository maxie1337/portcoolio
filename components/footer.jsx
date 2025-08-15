import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export function Footer ({isDarkMode}) {
    return(

        <div className="mt-20">
            <div className="text-center">
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-42 mx-auto mb-2"/>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6"/>
                    lonnstrom.max@gmail.com
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>© 2025 Maxie dev. Alla rättigheter reserverade</p>

                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target="_blank" href="https://github.com/maxie1337" className="hover:text-gray-600 dark:hover:text-gray-300">Github</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/max-l%C3%B6nnstr%C3%B6m-09099232b/" className="hover:text-gray-600 dark:hover:text-gray-300">Linkedin</a></li>
                    <li><a target="_blank" href="https://x.com/maxiecs_" className="hover:text-gray-600 dark:hover:text-gray-300">Twitter</a></li>
                </ul>

            </div>
        </div>
    )
}