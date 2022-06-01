import { Rating } from '@mui/material';
import React, { useState } from 'react'
import useDate from '../Hook/useDate'
const TestCard = () => {
    const [value, setValue] = useState(3)
    const dateNow = useDate()
    return (
        <div>
            <div className="card w-full h-72 border bg-base-100 shadow-xl">
                <div className="card-body">
                  
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=92310" alt=''/>
                            </div>
                        </div>

                        <div className='ml-3'>
                            <h3 className='text-2xl'>User name</h3>
                            <p className='mt-1'>{dateNow}</p>
                        </div>
                    </div>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia doloribus voluptatem sapiente illo tempora ullam enim totam illum maxime ex. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TestCard