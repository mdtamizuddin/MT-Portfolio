import { Rating } from '@mui/material'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import auth from '../Firebase/firebase.init'
import dateNow from '../Hook/useDate'
import Loading from '../Loading/Loading'
const AddReview = () => {
    const [value, setValue] = useState(0)
    const [user, loading] = useAuthState(auth)

    const addReview = (e) => {
        e.preventDefault()
        const name = user.displayName
        const email = user.email
        const photoURL = user.photoURL

        const description = e.target.description.value
        fetch('https://mt-portfolio2.herokuapp.com/review', {
            method: 'Post',
            headers: {
                'content-type': 'application/json',
                auth: localStorage.getItem('Token')
            },
            body: JSON.stringify({ name , email , photoURL , description , ratings : value  , date : dateNow()})
        }).then(res => {
            if (res.status === 200) {
                toast.success('Review Added')
                e.target.reset()
            }

        })
    }
    if (loading) {
        return <Loading />
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <form onSubmit={addReview} className='card py-14 px-5 w-96 max-w-lg shadow'>
                <div className="profile flex my-3 items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={user.photoURL} alt=''/>
                        </div>
                    </div>
                    <div className="info ml-3">
                        <h2 className="card-title">{user.displayName}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>

                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <textarea name='description' type="text" placeholder="Type here" className="input input-bordered w-full h-64 mt-5 max-w-full" />
                <button className='btn btn-primary text-white mt-5'>Submit Review</button>
            </form>
        </div>
    )
}

export default AddReview