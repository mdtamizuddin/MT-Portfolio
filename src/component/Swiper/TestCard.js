import { Rating } from '@mui/material';
import React, { useState } from 'react'
const TestCard = ({review}) => {
    const [setValue] = useState(3)
    return (
        <div >
            <div className="card w-full  h-80 border bg-base-100 shadow-xl">
                <div className="card-body">
                  
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={review.photoURL} alt=''/>
                            </div>
                        </div>

                        <div className='ml-3'>
                            <h3 className='text-2xl'>{review.name}</h3>
                            <p className='mt-1'>{review.date}</p>
                        </div>
                    </div>
                    <Rating
                        name="simple-controlled"
                        value={review.ratings}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <p className='mt-3'>{review.description.slice(0 , 180)}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TestCard