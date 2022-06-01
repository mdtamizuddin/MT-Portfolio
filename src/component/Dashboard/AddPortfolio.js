import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import storage from '../firebase/firebaseStorage';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const AddPortfolio = () => {
    const [progress, setProgress] = useState(0)
    const [image, setImage] = useState([])
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const name = data.name
        const images = image
        fetch('https://linear-graphic.herokuapp.com/portfolio', {
            method: 'Post',
            headers: {
                'content-type': 'application/json',
                auth: localStorage.getItem('Token')
            },
            body: JSON.stringify({ name, images })
        }).then(res => {
            if (res.status === 200) {
                reset()
                toast.success('Portfolio Added')
                setImage([])
            }

        })
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
                                        <span className="label-text">Portfolio Name</span>
                                    </label>
                                    <input
                                        {...register("name", { required: true })}

                                        className="input input-bordered" />
                                    <p className='text-red-500 mt-2 ml-2'>{errors.name?.type === 'required' && "Name is required"} </p>
                                </div>

                                {
                                    image.map((img, index) => <div key={index} className="form-control">
                                        <span className="label-text">Image : {index + 1}</span>
                                        <input
                                            {...register(`image${index}`, { required: true, value: img.image })}

                                            className="input input-bordered" />
                                    </div>

                                    )
                                }
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-secondary">Add Portfolio</button>
                                </div>

                            </form>
                            <ImageUpload image={image} setImage={setImage} progress={progress} setProgress={setProgress} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPortfolio





const ImageUpload = ({ image, setImage, progress, setProgress }) => {
    const [loading, setLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit , reset} = useForm();
    const onSubmit = async (data) => {
        setLoading(true)
        const file = data.file[0]
        const fileName =  Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 50)
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
                        setImage([...image, { image: url }])
                        setLoading(false)
                        reset()
                    })
            }
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Images</span>
                </label>
                <input type='file'
                    {...register("file", { required: true, maxLength: 20 })}
                    className="input p-2 input-bordered" multiple />
                <button type='submit' className={`btn btn-sm mt-4 ${loading && 'loading'}`}>Upload</button>
                <p className='text-red-500 mt-2 ml-2'>{errors.image?.type === 'required' && "Your Image"} </p>
            </div>
           {
               progress ?
               <progress className="progress w-full progress-secondary" value={progress} max="100"></progress>
                :
                ''
           }
        </form>
    )
}
