import React from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Loading from '../Loading/Loading'

const Messages = () => {
    const url = 'https://mt-portfolio2.herokuapp.com/messages'
    const { isLoading, data , refetch} = useQuery(['messages'], () =>
        fetch(url, {
            method: 'get',
            headers: {
                auth: localStorage.getItem('Token')
            }
        })
            .then(res => res.json()
            )
    )
    const deleteMessage = (id) => {
        fetch(`https://mt-portfolio2.herokuapp.com/messages/${id}`,{
            method: "delete",
            headers:{
                auth : localStorage.getItem('Token')
            }
        }).then(res => {
            if (res.status === 200) {
                toast.success('Message Deleted')
                refetch()
            }
        })
    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-4xl text-center mt-4'>All Messages</h1>
            <div className='flex flex-col-reverse'>
                {
                    data.map(message => <div className='relative' key={message._id}>

                        <section className="text-gray-600 body-font overflow-hidden">
                            <button className='btn btn-error btn-sm absolute right-0 mr-20' onClick={()=> deleteMessage(message._id)}>Delete</button>
                            <div className="container px-5 py-14 mx-auto">
                                <div className="-my-8 divide-y-2 divide-gray-100">
                                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="font-semibold title-font text-gray-700">{message.name}</span>
                                            <span className="font-semibold title-font text-gray-700">{message.email}</span>
                                            <span className="mt-1 text-gray-500 text-sm">{message.date}</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{message.subject}</h2>
                                            <p className="leading-relaxed">{message.message}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                    </div>
                    )
                }
            </div>

        </div>
    )
}

export default Messages
