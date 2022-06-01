import React from 'react'
import { Link } from 'react-router-dom'

const FooterI = () => {
  return (
    <div className='my-14 flex flex-col items-center px-2'>
        <h1 className='text-center text-4xl lg:text-5xl'>Let’s Collaborate with me</h1>
        <Link to='/contact' className='btn btn-primary px-10 mt-5 text-white'>Get In Tuch</Link>
    </div>
  )
}

export default FooterI