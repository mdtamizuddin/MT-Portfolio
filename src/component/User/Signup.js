import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import Social from './Social';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white border-t border-primary rounded shadow shadow-primary lg:max-w-md">
                    <h1 className="text-3xl font-semibold text-center text-primary">Sign Up</h1>
                    <Social />
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-800">Name</label>
                            <input  required  {...register("name", { required: true })}  type="text" className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
                            <input  required  {...register("email", { required: true })}  type="email" className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-4">
                            <div>
                                <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                                <input  required  {...register("password", { required: true })}
                                type="password" className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <a href="#" className="text-xs text-gray-600 hover:underline">Forget Password?</a>
                            <div className="mt-6">
                                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md ">
                                    Login
                                </button>
                            </div>
                            <p className="mt-8 text-xs font-light text-center text-gray-700"> You have an account? <Link to={'/login'} className="font-medium text-primary hover:underline">Login</Link></p>
                        </div></form>
                </div>
            </div>

        </div>
    )
}

export default Signup