import Link from "next/link"
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import About from "../components/About";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <>
      <div id="home" className="pt-36 sm:pt-48 pb-60 sm:pb-40 text-center">
        <div className="text-sm font-medium mb-2">Hello I&apos;m</div>
        <div className="text-6xl font-thin mb-1">Cale Adrian Lacson</div>
        <div className="text-[#4db5ff] text-sm font-medium">Software Engineer</div>

        <div className="mt-3">
          <a href="https://www.linkedin.com/in/cale-adrian/" target="_blank" rel="noreferrer" className="font-semibold inline-flex items-center rounded mr-3">
            <BsLinkedin className="text-[#4db5ff]" />
          </a>

          <a href="https://github.com/caleadrian/" target="_blank" rel="noreferrer" className="font-semibold inline-flex items-center rounded">
            <FaGithub className="text-[#4db5ff]" />
          </a>
        </div>

        <div className="mt-10">
          <button className="border border-[#4db5ff] font-semibold text-[#4db5ff] py-2.5 px-8 rounded-full mr-3 hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-500" type="button">
            Download CV
          </button>
          <Link href='#contact'>
            <button className="border border-[#4db5ff] bg-[#4db5ff] font-semibold text-gray-900 py-2.5 px-8 rounded-full hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-500" type="button">
              Let&apos;s talk
            </button>
          </Link>
        </div>
      </div>

      <About />
      <Experience />



      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div id="experience">Experience</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div id="portfolio">Porfolio</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div id='contact'>Contact</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
    </>
  )
}
