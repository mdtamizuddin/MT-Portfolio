import React from 'react'
import google from './google.svg'
const Social = () => {
    return (
        <div className='border mt-5'>
            <button className='btn btn-ghost text-neutral  w-full btn-md'>
                <img className='w-10 mr-5' src={google} alt="" />
                Continue With Google
            </button>
        </div>
    )
}

export default Social