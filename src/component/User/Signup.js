import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import Social from './Social';
import auth from '../Firebase/firebase.init'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import storage from '../Firebase/firebase.storage';

const Signup = () => {
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    console.log(progress)
    const navigate  = useNavigate()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setLoading(true)
        const email = data.email
        const password = data.password
        const file = data.file[0]
        const fileName = Math.random().toString(36).replace(/[^a-z]+/g, 'user').substr(0, 50)
        const storageRef = ref(storage, `/file/${fileName}-${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(prog)
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {
                        createUserWithEmailAndPassword(auth, email, password)
                            .then((userCredential) => {
                                const user = userCredential.user;
                                updateProfile(auth.currentUser, {
                                    displayName: data.name, photoURL: url
                                }).then(() => {
                                    fetch(`https://mt-portfolio2.herokuapp.com/users/${user.email}`, {
                                        method: "put",
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            name: user.displayName, email: user.email,
                                            photoURL: url
                                        })

                                    }).then(res => res.json())
                                        .then(json => {
                                            setLoading(false)
                                            localStorage.setItem('Token', json.token)
                                            navigate('/')
                                        })
                                }).catch((error) => {

                                });



                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                toast.error(errorCode)
                                setLoading(false)
                            })
                    })
            }
        )





    }

    return (
        <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white border-t border-primary rounded shadow shadow-primary lg:max-w-md">
                    <h1 className="text-3xl font-semibold text-center text-primary">Sign Up</h1>
                    <Social />
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-800">Name</label>
                            <input required  {...register("name", { required: true })} type="text" className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
                            <input required  {...register("email", { required: true })} type="email" className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-4">
                            <div>
                                <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                                <input required  {...register("password", { required: true })}
                                    type="password" className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="file" className="block text-sm text-gray-800">Avater</label>
                                <input required  {...register("file", { required: true })}
                                    type="file" className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <Link to={'/'} className="text-xs text-gray-600 hover:underline">Forget Password?</Link>
                            <div className="mt-6">
                                <button className={`${loading && 'loading'} btn btn-primary text-white btn-md w-full rounded-md`}>
                                    Sign up
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