import React from 'react'
import { AnimationWrapper } from 'react-hover-animation'
import about from './about.png'

const About = () => {
    return (
        <div className='  flex justify-center items-center'>
            <section className="text-neutral body-font w-full">
                <div className="container mx-auto flex px-5 py-24 md:flex-row-reverse items-between  flex-col items-center justify-between w-full ">
                    <div className="flex flex-col md:text-left mb-16 md:mb-0 items-center text-center lg:items-start items-center max-w-2xl w-full">
                        <p className='mb-2 text-sm'>ABOUT US</p>
                        <h1 className="title-font sm:text-5xl text-3xl my-4 font-medium text-gray-900">Who Am I ?
                        </h1>
                        <p>Hi I Am Md Tamiz Uddin.</p>
                        <p className='mt-2'>& I Am a Web Developer , Also Expert With Javascript,React Nodejs Bootstrap , Tailwind</p>
                        <p className=" mt-2 leading-relaxed"> And I'm a student of Programming Hero Complete Web Development Course  Batch 5 .
                        </p>
                        <p className="mt-2 mb-3 leading-relaxed font-bold">All I can help u with is </p>
                        <ul>
                            <li className='mt-2'>Building Simple Websites.</li>
                            <li className='mt-2'>Dynamic Websites.With Database</li>
                            <li className='mt-2'>Brilliant mixing of quality and performance.</li>
                            <li className='mt-2'>Greate Color combinations.</li>
                        </ul>
                        <button className="mt-8 btn btn-accent hover:text-primary
                            hover:bg-base-100 bg-base-100 border ">Get In Tuch</button>
                    </div>
                    <div className="lg:max-w-xl  lg:w-full md:w-1/2 w-lg">
                        <AnimationWrapper style={{
                            opacity: {
                                initial: 0.9,
                                onHover: 1,
                            }
                        }}
                        >
                            <img className="object-cover  w-full object-center rounded" alt="hero" src={about} />
                        </AnimationWrapper>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About