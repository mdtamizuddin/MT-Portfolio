import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'
const User = () => {
    const url = 'https://linear-graphic.herokuapp.com/users'
    const { isLoading, data, refetch } = useQuery(['users'], () =>
        fetch(url, {
            method: 'get',
            headers: {
                auth: localStorage.getItem('Token')
            }
        })
            .then(res => res.json()
            )
    )
    const makeAdmin = (email) => {
        fetch(`https://linear-graphic.herokuapp.com/users/admin/${email}`, {
            method: 'put',
            headers: {
                auth: localStorage.getItem('Token')
            }
        })
            .then(res => {
                if (res.status === 200 ) {
                    refetch()
                }
            })
    }
    const removeAdmin = (email) => {
        fetch(`https://linear-graphic.herokuapp.com/users/admin-r/${email}`, {
            method: 'put',
            headers: {
                auth: localStorage.getItem('Token')
            }
        })
            .then(res => {
                if (res.status === 200 ) {
                    refetch()
                }
            })
    }
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className="text-4xl text-center mt-10">All Users</h1>

            {
                data.length > 0 ?
                    <table className="table-compact w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th />
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                data.map((user, index) => <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={user.photoURL} alt=''/>
                                        </div>
                                    </div>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ?
                                                <button disabled className='btn  w-full btn-primary'>Admin</button>
                                                :
                                                <button onClick={() => makeAdmin(user.email)} className='btn  w-full btn-primary'>Make Admin</button>
                                        }

                                    </td>
                                    <td>
                                        {
                                            user.role === 'admin' ?
                                                <button disabled={user.email === 'mdtomiz.official@gmail.com'}
                                                    onClick={() => removeAdmin(user.email)}
                                                    className='btn  w-full btn-primary'>remove</button>
                                                :
                                                <button className='btn btn-error w-full'>Delete</button>
                                        }

                                    </td>
                                </tr>
                                )
                            }

                        </tbody>
                    </table>
                    :
                    <h1 className='text-center text-red-600 text-2xl'>No Portfolio 0</h1>
            }
        </div>
    )
}

export default User