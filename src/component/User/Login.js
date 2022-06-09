import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import Social from './Social';
import {  signInWithEmailAndPassword } from "firebase/auth";
import auth from '../Firebase/firebase.init';
import { toast } from 'react-toastify';


const Login = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setLoading(true)
        const email = data.email
        const password = data.password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                fetch(`https://mt-portfolio2.herokuapp.com/users/${email}`, {
                    method: "put",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: user.displayName, email: email,
                        photoURL: user.photoURL
                    })

                })
                    .then(res => res.json())
                    .then(json => {
                        localStorage.setItem('Token', json.token)
                        navigate('/')
                    })
                setLoading(false)
            })
            .catch((error) => {
                const errorCode = error.code;
                setLoading(false)
                toast.error(errorCode)
            });

    }

    return (
        <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white border-t border-primary rounded shadow shadow-primary lg:max-w-md">
                    <h1 className="text-3xl font-semibold text-center text-primary">Login Now</h1>
                    <Social />
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
                            <input required  {...register("email", { required: true })} type="email" className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-4">
                            <div>
                                <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                                <input required  {...register("password", { required: true })}
                                    type="password" className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <button className="text-xs text-gray-600 hover:underline">Forget Password?</button>
                            <div className="mt-6">
                                <button className={`${loading && 'loading'} btn btn-primary text-white btn-md w-full rounded-md`}>
                                    Login
                                </button>
                            </div>
                            <p className="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <Link to={'/signup'} className="font-medium text-primary hover:underline">Sign up</Link></p>
                        </div></form>
                </div>
            </div>

        </div>
    )
}

export default Login