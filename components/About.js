import Image from 'next/image';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import avatar from '../resources/image/avatar_wave.jpg'
import Link from "next/link"

function About() {
    return (
        <div id='about' className='snap-start pt-5 sm:pt-36 text-center px-10 sm:px-0  sm:h-screen'>
            <div className='text-xs font-medium text-gray-500 mb-1'>Get to know</div>
            <div className='text-[#4db5ff] text-2xl'>About me</div>

            <div className='flex md:flex-row flex-col mt-10 justify-center items-center md:items-start'>

                <div className='h-52 w-52 md:h-60 md:w-60 mb-12 sm:mr-10 md:mb-0 rounded-3xl bg-gradient-to-tr from-orange-400 to-slate-600'>
                    <div className='rotate-12 hover:rotate-0 transition-all duration-300 z-0'>
                        <Image src={avatar} alt='cale is waving' className='rounded-3xl' />
                    </div>
                </div>

                <div className='grid gap-6 grid-cols-2 md:w-5/12'>
                    <div className='col-span-1 bg-[#2c2c6c] h-48 sm:w-full rounded-md flex flex-col items-center py-10'>
                        <FaAward className='text-[#4db5ff] text-2xl mb-8' />
                        <div className='mb-1 font-extralight leading-5'>Professional Experience</div>
                        <div className='text-xs text-gray-400'>4+ Years</div>
                    </div>
                    <div className='col-span-1 bg-[#2c2c6c] h-48 sm:w-full rounded-md flex flex-col items-center py-10 px-5'>
                        <VscFolderLibrary className='text-[#4db5ff] text-2xl mb-8' />
                        <div className='mb-1 font-extralight'>Projects</div>
                        <div className='text-xs text-gray-400'>20+ Completed Projects</div>
                    </div>

                    <div className='col-span-2 text-left text-base text-gray-300 font-medium'>
                        I&apos;m an experienced Software Engineer with 4 years of hands-on experience in identifying web-based user interactions along with designing & implementing highly responsive user interface components by deploying Javascript concepts. Proficiency in translating designs & wireframes into high-quality code, and writing application interfaces via Javascript, Angular2+ and ReactJS workflows. Adept at monitoring & maintaining front-end performance and troubleshooting.
                    </div>
                    <Link href='#contact'>
                        <button className="w-44 border border-[#4db5ff] bg-[#4db5ff] font-semibold text-gray-900 py-2.5 px-8 rounded-full hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-500" type="button">
                            Hire me?
                        </button>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default About