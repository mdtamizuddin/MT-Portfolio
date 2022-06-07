import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'

const Messages = () => {
    const url = 'https://mt-portfolio2.herokuapp.com/messages'
    const { isLoading, data } = useQuery(['messages'], () =>
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
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-4xl text-center mt-4'>All Messages</h1>
            <div className='flex flex-col-reverse'>
                {
                    data.map(message => <div key={message._id}>
                        <section className="text-gray-600 body-font overflow-hidden">
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