import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loading from '../Loading/Loading'

const ManagePortfolio = () => {
    const [show, setShow] = useState(false)
    const [upShow, setUpShow] = useState(false)
    const [portfolio, setPortfolio] = useState({})
    const url = 'https://mt-portfolio2.herokuapp.com/portfolio'
    const { isLoading, data, refetch } = useQuery(['portfolios'], () =>
        fetch(url, {
            method: 'get',
            headers: {
                auth: localStorage.getItem('Token')
            }
        })
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return 
    }
    return (
        <div className='pt-10'>
            <h1 className='text-center text-4xl my-5'>All Portfolios</h1>
            <div className="overflow-x-auto">
                {
                    data.length > 0 ?
                        <table className="table-compact w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th />
                                    <th>Link</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    data.map((port, index) => <tr key={port._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    <img src={port.image} alt='' />
                                                </div>
                                            </div>

                                        </td>
                                        <td><a target={'_blank'} rel="noreferrer" href={port.link}>{port.link}</a></td>
                                        <td><button onClick={() => {
                                            setUpShow(true)
                                            setPortfolio(port)
                                        }} className='btn w-full btn-primary'>Update</button></td>
                                        <td><button onClick={() => {
                                            setShow(true)
                                            setPortfolio(port)
                                        }} className='btn w-full btn-error'>Delete</button></td>
                                    </tr>
                                    )
                                }

                            </tbody>
                        </table>
                        :
                        <h1 className='text-center text-red-600 text-2xl'>No Portfolio 0</h1>
                }
            </div>
            <Modal show={show} setShow={setShow} portfolio={portfolio} refetch={refetch} />
            <ModalUpdate portfolio={portfolio} refetch={refetch} upShow={upShow} setUpShow={setUpShow} />
        </div>
    )
}

export default ManagePortfolio

const Modal = ({ show, setShow, portfolio, refetch }) => {

    const detetPort = () => {
        const id = portfolio._id
        fetch(`https://mt-portfolio2.herokuapp.com/portfolio/${id}`, {
            method: "delete",
            headers: {
                auth: localStorage.getItem('Token')
            }
        }).then(res => {
            if (res.status === 200) {
                setShow(false)
                toast.success('Deleted Success')
                refetch()
            }
        })
    }
    return (
        <div className={`modal-full ${show ? 'flex' : 'hidden'}`}>
            <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <h2 className="flex items-center text-red-500 gap-2 text-xl font-semibold leading-tight tracking-wide">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current shrink-0 dark:text-violet-400">
                        <path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z" />
                        <rect width={32} height={136} x={240} y={112} />
                        <rect width={32} height={32} x={240} y={280} />
                    </svg>
                    Delete Warning
                </h2>
                <p className="flex-1 text-red-400">Are You Sure You Want to Delete This Portfolio</p>
                <p className="text-primary">
                    Name : {portfolio.name}
                </p>
                <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
                    <button onClick={() => setShow(false)} className="px-6 py-2 rounded-lg shadow-sm  btn-success btn btn-sm">No</button>
                    <button onClick={detetPort} className="px-6 py-2 rounded-lg shadow-sm  btn-error btn btn-sm">Yes</button>
                </div>
            </div>
        </div>
    )
}

const ModalUpdate = ({ upShow, setUpShow, portfolio, refetch }) => {
    const [loading, setLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setLoading(true)

        fetch(`https://mt-portfolio2.herokuapp.com/portfolio/${portfolio._id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json',
                auth: localStorage.getItem('Token')
            },
            body: JSON.stringify({ name: data.name })
        }).then(res => {
            if (res.status === 200) {
                setUpShow(false)
                refetch()
            }
        })
    }
    if (loading) {
        return
    }
    return (
        <div className={`modal-full ${upShow ? 'flex' : 'hidden'}`}>

            <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 relative">
                <button onClick={()=> setUpShow(false)} className='btn btn-error btn-sm absolute right-0 top-0'>close</button>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:w-96">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            defaultValue={portfolio.language}
                            {...register("name", { required: true, value: portfolio.name })}
                            className="input input-bordered" type='text' />
                        <p className='text-red-500 mt-2 ml-2'>{errors.name?.type === 'required' && "Name is required"} </p>
                    </div>

                    {/* Portfolio Link  */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Link</span>
                        </label>
                        <input
                            defaultValue={portfolio.link}
                            {...register("lnik", { required: true, value: portfolio.name })}
                            className="input input-bordered" type='text' />
                        <p className='text-red-500 mt-2 ml-2'>{errors.name?.type === 'required' && "Name is required"} </p>
                    </div>

                    {/* portfolio Image  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input
                            {...register("file", { required: true, value: portfolio.name })}
                            className="input input-bordered" type='text' />
                        <p className='text-red-500 mt-2 ml-2'>{errors.name?.type === 'required' && "Name is required"} </p>
                    </div>
                    <button type='submit' className='btn btn-secondary'>Update</button>
                </form>
            </div>
        </div>
    )
}