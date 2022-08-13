import React from 'react';
import Image from 'next/image';
import tictactoe from '../resources/image/tictactoe.png';
import todolist from '../resources/image/todolist.png';

function Projects() {
    const Projects = [
        {
            title: 'Multiplayer Tic Tac Toe',
            img: tictactoe,
            desc: 'A web-based tic tac toe game that can be played by two player online. Provides dashboard for the players game stats, match timer, and lots of interesting feature',
            techs: [
                'ReactJS', 'Socket.IO', 'NextJS', 'Tailwind'
            ],
            link: 'https://my-online-tictactoe.herokuapp.com/',
            repo: 'https://github.com/caleadrian/online-tictactoe'
        },
        {
            title: 'Typescript Todo List',
            img: todolist,
            desc: 'A Todo List app overkilled with javascript frameworks 😂',
            techs: [
                'ReactJS', 'Typescript', 'Redux', 'Framer', 'Tailwind'
            ],
            link: 'https://todo-reactjs-ts-redux.vercel.app/',
            repo: 'https://github.com/caleadrian/todo-reactjs-ts-redux'
        }
    ]

    const openLink = (url) => {
        window.open(url, '_blank')
    }

    return (
        <div id='projects' className='snap-start py-5 sm:pt-36 px-10 sm:px-0 sm:h-screen'>
            <div className='text-center '>
                <div className='text-xs font-medium text-gray-500 mb-1'>Craft with 🧡</div>
                <div className='text-[#4db5ff] text-2xl'>Personal Projects</div>
            </div>

            <div className='flex flex-col lg:flex-row lg:items-start lg:space-x-5 lg:space-y-0 mt-10 space-y-5'>
                {Projects.map((item, i) => (
                    <div key={i} className='bg-white p-4 rounded-md bg-opacity-5 backdrop-blur-0 w-full lg:w-3/6'>
                        <div className='mb-2 text-lg'>{item.title}</div>
                        <div className='flex justify-start space-x-5'>
                            <div className='w-36 h-36 rounded-md overflow-hidden flex-shrink-0'>
                                <Image src={item.img} alt='multiplayer tictactoe' className='hover:scale-150 transition-all duration-500' />
                            </div>

                            <div>
                                <div className='text-sm'>
                                    {item.desc}
                                </div>

                                <div className='mt-1'>
                                    <button className='mt-2 border border-[#4db5ff] bg-[#4db5ff] text-white py-1 px-6 rounded-full hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-500 text-xs mr-2' onClick={() => openLink(item.link)}>
                                        Demo
                                    </button>
                                    <button className='mt-2 border border-white bg-transparent text-white py-1 px-6 rounded-full bg-white  hover:bg-white hover:text-black transition-all duration-500 text-xs' onClick={() => openLink(item.repo)}>
                                        Repo
                                    </button>
                                </div>


                                <div className='flex text-sm flex-wrap mt-4'>
                                    {item.techs.map((tech, j) => (
                                        <div key={j} className=' text-orange-400 font-mono mr-4'>{tech}</div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Projects