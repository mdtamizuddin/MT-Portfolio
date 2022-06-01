import React from 'react'
import { Link } from 'react-router-dom'
import CardPortfolio from '../Portfolio/CardPortfolio'

const Portfolio = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">PORTFOLIOS</p>
                        <h1 className="sm:text-3xl lg:text-4xl font-medium title-font  text-gray-900">View some previous Projects</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <CardPortfolio link={'https://mockuptree.com/wp-content/uploads/edd/2018/12/3d-web-presentation-mock-up-psd.jpg'} image={'https://mockuptree.com/wp-content/uploads/edd/2018/12/3d-web-presentation-mock-up-psd.jpg'} />

                        <CardPortfolio link={'https://mockuptree.com/wp-content/uploads/edd/2018/12/3d-web-presentation-mock-up-psd.jpg'} image={'https://mockuptree.com/wp-content/uploads/edd/2018/12/3d-web-presentation-mock-up-psd.jpg'} />

                        <CardPortfolio link={'https://mockuptree.com/wp-content/uploads/edd/2018/12/3d-web-presentation-mock-up-psd.jpg'} image={'https://mockuptree.com/wp-content/uploads/edd/2018/12/3d-web-presentation-mock-up-psd.jpg'} />
                    </div>

                    <div className='flex justify-center mt-7'>
                    <Link to={'/portfolio'} className='btn btn-primary text-white px-6'>See More</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio