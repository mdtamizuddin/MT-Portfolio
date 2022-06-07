import React from 'react'

const Skills = () => {
  return (
    <div className='container py-20 lg:px-10 px-5 mx-auto'>
        <p className='text-neutral text-sm'>MY SPECIALTY</p>
        <h1 className='text-4xl font-bold mt-4'>My Skills</h1>
        <section className='grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-2'>
        <div className='mt-5'>
        <label className='block'>React</label>
        <progress title='85%'  className="progress lg:w-96 w-full progress-primary" value="90" max="100"></progress>
        </div>
        <div className='mt-5'>
        <label className='block'>Javacript</label>
        <progress title='80%' className="progress lg:w-96 w-full progress-secondary" value="80" max="100"></progress>
        </div>
        <div className='mt-5'>
        <label className='block'>Node Js</label>
        <progress title='80%' className="progress lg:w-96 w-full progress-success" value="80" max="100"></progress>
        </div>
        <div className='mt-5'>
        <label className='block'>Mongoose</label>
        <progress title='90%' className="progress lg:w-96 w-full progress-error" value="90" max="100"></progress>
        </div>
        <div className='mt-5'>
        <label className='block'>HTML</label>
        <progress title='95%' className="progress lg:w-96 w-full progress-error" value="95" max="100"></progress>
        </div>
        <div className='mt-5'>
        <label className='block'>CSS</label>
        <progress title='95%' className="progress lg:w-96 w-full progress-warning" value="95" max="100"></progress>
        </div>
        <div className='mt-5'>
        <label className='block'>BootStrap</label>
        <progress title='95%' className="progress lg:w-96 w-full " value="95" max="100"></progress>
        </div>
        <div className='mt-5'>
        <label className='block'>Tailwind</label>
        <progress title='95%' className="progress lg:w-96 w-full progress-accent" value="95" max="100"></progress>
        </div>
        </section>
    </div>
  )
}

export default Skills