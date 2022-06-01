import React from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import Loading from '../../Loading/Loading'

const Yearly = () => {
    const url = `https://linear-graphic.herokuapp.com/pricingYearly/`
    const { isLoading, data } = useQuery(['pricing yearly'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    }
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                data.map((price, index) => <form onSubmit={handleSubmit(onSubmit)} className='card p-5 w-full' key={price._id}>
                    <input className='mt-3 text-2xl className="input border w-full p-2  w-full' defaultValue={price.type} type="text" />
                    <input className='mt-3 text-2xl className="input border w-full p-2 w-full' defaultValue={price.price}type="text" />
                    {
                        price.services.map((service , index) => <input key={index} {...register(`service${index}`, { required: true , value: service })}
                            className='mt-3 className="input border w-full max-w-lg p-2'  type="text" />
                        )

                    }
                    <button type='submit' className='btn mt-5 btn-primary btn-sm'>Update</button>
                </form>)
            }
        </div>
    )
}

export default Yearly