import React from 'react'
import design from './icon/web-design.png'
import designic from './icon/bug.png'
import web from './icon/web-development.png'
const Services = () => {
    return (
        <div className='py-20 px-5 container mx-auto'>

            <h1 className='text-4xl font-bold leading-relaxed'>What Services you  will<br /> Get from me!</h1>
            <section className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-7 justify-items-center">
                <div className="hover:mt-3 card lg:w-96 h-96 bg-base-100 border hover:bg-error shadow-xl hover:text-white ease-in duration-300 ">
                    <div className="avatar flex justify-center mt-5">
                        <div className="w-24 ">
                            <img src={design} alt='' />
                        </div>
                    </div>
                    <div className="card-body w-full">
                        <h2 className="text-3xl text-center">Website Design</h2>
                        <p className='text-center mt-2'>Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website's overall functionality.</p>
                    </div>
                </div>

                <div className="hover:mt-3 card lg:w-96 h-96 bg-base-100 border hover:bg-error shadow-xl hover:text-white ease-in duration-300 ">
                    <div className="avatar flex justify-center mt-5">
                        <div className="w-24 ">
                            <img  className=' w-full' src={web} alt='' />
                        </div>
                    </div>
                    <div className="card-body w-full">
                        <h2 className="text-3xl text-center">Website Development</h2>
                        <p className='text-center mt-2'>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple  web</p>
                    </div>
                </div>

                <div className="hover:mt-3 card lg:w-96 h-96 bg-base-100 border hover:bg-error shadow-xl hover:text-white ease-in duration-300 ">
                    <div className="avatar flex justify-center mt-5">
                        <div className="w-24 ">
                            <img className='w-24 bg-base-100' src={designic} alt='' />
                        </div>
                    </div>
                    <div className="card-body w-full">
                        <h2 className="text-3xl text-center">Bug Fixing</h2>
                        <p className='text-center mt-2'>A bug fix is a change to a system or product designed to handle a programming bug/glitch. Many different types of programming bugs that create errors with system implementation  </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Services