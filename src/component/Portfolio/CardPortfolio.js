import React from 'react'

const CardPortfolio = ({portfolio}) => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${portfolio?.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: "center" }} className="card h-96  card-compact w-full bg-base-100 shadow-xl relative">
                <div className="card-body absolute opacity-0 hover:opacity-100 h-full flex flex-col items-center justify-center w-full overlay">
                    <div className="card-actions justify-center ">
                        <p className='text-center w-full font-bold text-white'>
                            Language : {portfolio?.details.language}
                        </p>
                        <p className='text-center w-full font-bold text-white'>
                            Css PremWork : {portfolio?.details.fremwork}
                        </p>
                        <a href={portfolio?.link} rel="noreferrer" target={'_blank'} className="btn btn-primary btn-sm mt-5 opacity-100 text-white">Visit Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPortfolio

