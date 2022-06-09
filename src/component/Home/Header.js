import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import mern from './header.png'
import { AnimationWrapper } from 'react-hover-animation'

const Header = () => {

    return (
        <div className='h-screen   flex justify-center items-center'>
            <section className="text-neutral body-font w-full">
                <div className="container mx-auto flex px-5 py-24 md:flex-row items-between  flex-col items-center justify-between w-full ">
                    <div className="flex flex-col md:text-left mb-16 md:mb-0 items-center text-center lg:items-start items-center max-w-2xl w-full">
                        <h1 className='font bold ml-1 mb-3'>Hello I Am</h1>
                        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">MERN Stuck Web Developer
                        </h1>

                        <p className="mb-8 leading-relaxed">I’m working with React / Nodejs for about 1 years.<br />  My #1 goal will always be  to meet your needs and deadline. <br />

                            Please take a look at my work history for feedback from My clients <br />

                        </p>
                        <div className="flex justify-end">
                            <Link to={'/contact'} title='Click To Go Contact Page' className="btn animate-bounce btn-primary text-white px-5">Hire me</Link>
                            <a href='https://github.com/mdtamizuddin/others/raw/main/Md%20Tamiz%20Uddin%20Resume.pdf'
                                target={'_blank'} rel="noreferrer" className="btn btn-accent hover:text-primary
                            hover:bg-base-100 bg-base-100 border ml-5">Download Resume</a>
                        </div>
                    </div>
                    <div className="lg:max-w-xl  lg:w-full md:w-1/2 w-lg">
                        <AnimationWrapper style={{
                            opacity: {
                                initial: 0.9,
                                onHover: 1,
                            }
                        }}
                        >
                            <img className={`object-cover  w-full object-center rounded`} alt="hero" src={mern} />
                        </AnimationWrapper>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Header