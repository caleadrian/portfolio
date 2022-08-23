import React from 'react'
import Image from 'next/image';
import avatar from '../resources/image/avatar_call_me.jpg';
import Script from 'next/script';

function Contact() {
    return (
        <div id='contact' className='snap-start pt-5 sm:pt-36 text-center px-0 sm:px-0  sm:h-screen'>
            <Script src="https://www.google-analytics.com/analytics.js" />
            <div className='text-center'>
                <div className='text-xs font-medium text-gray-500 mb-1'>My tech powers</div>
                <div className='text-[#4db5ff] text-2xl'>Experience & <span className='text-orange-400'>Skills</span></div>
            </div>

            <div className='flex mt-10 justify-center space-x-5'>
                <div className='h-52 w-52 md:h-60 md:w-60 mb-12 sm:mr-10 md:mb-0 rounded-3xl bg-gradient-to-tr from-orange-400 to-slate-600'>
                    <div>
                        <div className='-rotate-12 hover:rotate-0 transition-all duration-300 z-0'>
                            <Image src={avatar} alt='cale is waving' className='rounded-3xl' />
                        </div>
                    </div>
                </div>

                <div className='bg-white bg-opacity-5 w-7/12 rounded-md'>
                    <form
                        name='contact'
                        method='post'
                        data-netlify='true'
                        onSubmit='submit'
                        data-netlify-honeypot='bot-field'
                        action='/#contact'>

                        <input type='hidden' name='form-name' value='contact' />

                        <div hidden>
                            <input name='bot-field' />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <div>
                                <label>Name</label>
                                <input className='text-black' type='text' name='name' required />
                            </div>

                            <div>
                                <label>Email</label>
                                <input className='text-black' type='email' name='name' required />
                            </div>

                            <div>
                                <label>Message</label>
                                <textarea className='text-black' name='message' required></textarea>
                            </div>

                            <button type='submit'>Submit</button>
                        </div>


                    </form>
                </div>
            </div>


        </div>
    )
}

export default Contact