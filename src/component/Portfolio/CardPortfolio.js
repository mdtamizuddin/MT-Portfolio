import React from 'react'
import { AnimationWrapper } from 'react-hover-animation'

const CardPortfolio = ({ portfolio }) => {
    return (
        <div>
            <AnimationWrapper style={{
                opacity: {
                    initial: 0.9,
                    onHover: 1,
                }
            }}
            >
                <div style={{ backgroundImage: `url(${portfolio?.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: "center" }} className="card h-96  card-compact w-full bg-base-100 shadow-xl relative">
                    <div className="card-body absolute opacity-0 hover:opacity-100 h-full flex flex-col items-center justify-center w-full overlay">
                        <div className="card-actions justify-center ">
                            <p className='text-center w-full font-bold text-white'>
                                Language : {portfolio?.details.language}
                            </p>
                            <p className='text-center w-full font-bold text-white'>
                                Css / Css PremWork : {portfolio?.details.fremwork}
                            </p>
                            {
                                portfolio?.details.admin &&

                                <>
                                    <p className='text-center text-lg text-white'>Admin : {portfolio?.details.admin}</p>
                                    <p className='text-center w-full text-lg text-white'>Pass : {portfolio?.details.pass}</p>
                                </>
                            }
                            <div className="code flex justify-center w-full mt-2">
                                <a href={portfolio?.links.client} rel="noreferrer" target={'_blank'} className="btn-sm btn text-sm text-white btn-success">Code Client</a>

                                {
                                    portfolio?.links.server &&
                                    <a href={portfolio?.links.server} rel="noreferrer" target={'_blank'} className="btn-sm btn ml-3 text-sm text-white btn-success">Code Server</a>
                                }
                            </div>
                            <a href={portfolio?.links.live} rel="noreferrer" target={'_blank'} className="btn btn-primary btn-sm mt-5 opacity-100 text-white">Visit Website</a>
                        </div>
                    </div>
                </div>
            </AnimationWrapper>
        </div>
    )
}

export default CardPortfolio

