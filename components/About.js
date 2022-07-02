import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

function About() {
    return (
        <div id='about' className='pt-5 sm:pt-36 text-center px-10 sm:px-0'>
            <div className='text-xs font-medium text-gray-500 mb-1'>Get to know</div>
            <div className='text-[#4db5ff] text-2xl'>About me</div>

            <div className='flex sm:flex-row flex-col mt-10 justify-center items-center sm:items-start'>
                <div className='h-52 w-52 sm:h-60 sm:w-60 mb-12 sm:mr-10 sm:mb-0 rounded-3xl bg-gradient-to-tr from-orange-400 to-slate-600'>
                </div>

                <div className='grid gap-6 grid-cols-2 sm:w-5/12'>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id faucibus purus, id ultrices ex. Cras viverra mi ac nunc blandit, eget dapibus mi faucibus. Ut tempus placerat est, quis maximus velit vehicula ut. Ut laoreet mattis erat at feugiat. Morbi finibus dictum ornare. Donec tortor tortor, semper tincidunt velit ut, malesuada sodales diam. Curabitur non dapibus ex. Aenean quis ex egestas, blandit magna vel, ornare orci. Ut libero enim, pellentesque sit amet suscipit et, dapibus sed purus. Sed commodo nisi accumsan massa hendrerit, sit amet placerat nisi aliquam. Donec ultricies sem sed consectetur tempor. Vivamus id facilisis sem.
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About