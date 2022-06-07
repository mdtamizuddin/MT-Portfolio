import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import storage from '../Firebase/firebase.storage';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import dateNow from '../Hook/useDate';

const AddPortfolio = () => {
    const [loading, setLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        setLoading(true)
        const details = {
            fremwork: data.fremwork,
            language : data.language
        }
        const link = data.link
        const file = data.file[0]
        const fileName = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 50)
        const storageRef = ref(storage, `/file/${fileName}-${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            console.log(prog)
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {
                        console.log(url);
                        fetch('https://mt-portfolio2.herokuapp.com/portfolio', {
                            method: 'Post',
                            headers: {
                                'content-type': 'application/json',
                                auth: localStorage.getItem('Token')
                            },
                            body: JSON.stringify({ details, image: url, link , date : dateNow() })
                        }).then(res => {
                            if (res.status === 200) {
                                reset()
                                toast.success('Portfolio Added')
                                setLoading(false)
                            }

                        })
                    })
            }
        )
    }

    return (
        <div>
            <div className="hero min-h-screen w-full bg-base-100">
                <div style={{ width: '100%' }} className="hero-content">
                    <div className="card w-full max-w-md shadow-2xl bg-base-100">
                        <div className="card-body">

                            <h1 className='text-center text-primary text-2xl'>Add A Portfolio</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Language</span>
                                    </label>
                                    <input type={'text'}
                                        {...register("language", { required: true })}

                                        className="input  input-bordered" />
                                    <p className='text-red-500 mt-2 ml-2'>{errors.name?.type === 'required' && "Name is required"} </p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Css Fremwork</span>
                                    </label>
                                    <input type={'text'}
                                        {...register("fremwork", { required: true })}
                                        
                                        className="input  input-bordered" />
                                    <p className='text-red-500 mt-2 ml-2'>{errors.name?.type === 'required' && "Name is required"} </p>
                                </div>
                                <div className="form-control mt-4">
                                    <span className="label-text">Site Link</span>
                                    <input
                                        {...register("link", { required: true })}

                                        className="input input-bordered" />
                                </div>
                                <div className="form-control mt-4">
                                    <span className="label-text">Site Link</span>
                                    <input
                                        {...register("file", { required: true })}

                                        className="input p-2 input-bordered" type='file' />
                                </div>

                                <div className="form-control mt-6">
                                    <button type='submit' className={`btn btn-primary text-white ${loading && 'loading'}`}>Add Portfolio</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPortfolio



