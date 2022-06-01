import React from 'react'
import design from './icon/design.svg'
import designic from './icon/design-icon.svg'
import web from './icon/web.svg'
const Services = () => {
    return (
        <div className='py-20 px-5 container mx-auto'>

            <h1 className='text-4xl font-bold leading-relaxed'>What Services you  will<br /> Get from me!</h1>
            <section className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-7 justify-items-center">
                <div className="hover:mt-3 card lg:w-96 h-96 bg-base-100 border hover:bg-error shadow-xl hover:text-white ease-in duration-300 ">
                    <div className="avatar flex justify-center mt-10">
                        <div className="w-24 rounded-full ">
                            <img src={design} alt='' />
                        </div>
                    </div>
                    <div className="card-body w-full">
                        <h2 className="text-3xl text-center">Website Design</h2>
                        <p className='text-center mt-2'>Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.</p>
                    </div>
                </div>

                <div className="hover:mt-3 card lg:w-96 h-96 bg-base-100 border hover:bg-error shadow-xl hover:text-white ease-in duration-300 ">
                    <div className="avatar flex justify-center mt-10">
                        <div className="w-24 ">
                            <img  className='bg-base-100  w-full' src={web} alt='' />
                        </div>
                    </div>
                    <div className="card-body w-full">
                        <h2 className="text-3xl text-center">Website Development</h2>
                        <p className='text-center mt-2'>Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.</p>
                    </div>
                </div>

                <div className="hover:mt-3 card lg:w-96 h-96 bg-base-100 border hover:bg-error shadow-xl hover:text-white ease-in duration-300 ">
                    <div className="avatar flex justify-center mt-10">
                        <div className="w-24 ">
                            <img className='w-24 bg-base-100' src={designic} alt='' />
                        </div>
                    </div>
                    <div className="card-body w-full">
                        <h2 className="text-3xl text-center">UI / UX Design</h2>
                        <p className='text-center mt-2'>Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Services