import React from 'react'
import { useQuery } from 'react-query'
import CardPortfolio from './CardPortfolio'

const Portfolio = () => {
    const url = 'https://mt-portfolio2.herokuapp.com/portfolio'
    const { isLoading, data } = useQuery(['portfolio'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return
    }
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">PORTFOLIOS</p>
                        <h1 className="sm:text-3xl lg:text-4xl font-medium title-font  text-gray-900">View some previous Projects</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {
                            data.map(portfolio => <CardPortfolio portfolio={portfolio} key={portfolio._id} />)
                        }
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Portfolio