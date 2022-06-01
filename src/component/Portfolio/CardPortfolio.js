import React from 'react'

const CardPortfolio = ({ link, image }) => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }} className="card h-96  card-compact w-full bg-base-100 shadow-xl relative">
                <div className="card-body absolute opacity-0 hover:opacity-90 h-full flex flex-col items-center justify-center w-full bg-neutral">
                    <div className="card-actions justify-end">
                        <a href={link} rel="noreferrer" target={'_blank'} className="btn btn-primary opacity-100 text-white">Visit Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPortfolio

