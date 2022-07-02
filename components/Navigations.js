import { useEffect } from "react";
import Link from "next/link"
import { HomeIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/outline'
import { BriefcaseIcon } from '@heroicons/react/outline'
import { SparklesIcon } from '@heroicons/react/outline'
import { AtSymbolIcon } from '@heroicons/react/outline'
import { EyeIcon } from '@heroicons/react/outline'
import { KeyIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter();

    const setActiveClass = (path = '') => {
        return router.asPath === path ? 'bg-[#1f1f38] ' : ''
    }

    return (
        <nav className="fixed bottom-3 flex justify-center w-full">
            <ul className="grid grid-flow-col gap-1 sm:gap-4 bg-white py-2 px-3 rounded-full bg-opacity-5 backdrop-blur-sm">
                <Link href='/'>
                    <li title="Home" className={setActiveClass('/') + "transition-all duration-500 cursor-pointer p-3 rounded-full border-0"}>
                        <HomeIcon className="h-5 w-5 text-white" />
                    </li>
                </Link>
                <Link href='/#about'>
                    <li title="About" className={setActiveClass('/#about') + "transition-all duration-500 cursor-pointer p-3 rounded-full border-0"}>
                        <UserIcon className="h-5 w-5 text-white" />
                    </li>
                </Link>
                <Link href='/#experience'>
                    <li title="Experience" className={setActiveClass('/#experience') + "transition-all duration-500 cursor-pointer p-3 rounded-full border-0"}>
                        <BriefcaseIcon className="h-5 w-5 text-white" />
                    </li>
                </Link>
                <Link href='/#portfolio'>
                    <li title="Porfolio" className={setActiveClass('/#portfolio') + "transition-all duration-500 cursor-pointer p-3 rounded-full border-0"}>
                        <SparklesIcon className="h-5 w-5 text-white" />
                    </li>
                </Link>
                <Link href='/#contact'>
                    <li title="Contact" className={setActiveClass('/#contact') + "transition-all duration-500 cursor-pointer p-3 rounded-full border-0"}>
                        <AtSymbolIcon className="h-5 w-5 text-white" />
                    </li>
                </Link>
                <Link href='/story'>
                    <li title="Story" className={setActiveClass('/story') + "transition-all duration-500 cursor-pointer p-3 rounded-full border-0"}>
                        <EyeIcon className="h-5 w-5 text-white" />
                    </li>
                </Link>
                <Link href='/master'>
                    <li title="Master" className={setActiveClass('/master') + "transition-all duration-500 cursor-pointer p-3 rounded-full border-0"}>
                        <KeyIcon className="h-5 w-5 text-white" />
                    </li>
                </Link>
            </ul>
        </nav>
    );
}