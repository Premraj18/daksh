import React from 'react'

const ActivityCard = ({item}) => {
    return (
        <div className='container w-full'>
            <div className='flex justify-center md:gap-x-24 gap-y-20 flex-wrap'>
                {item.map((d) => {
                    return(
                        <div
                        key={d.id}
                        className="block border-t-[5px] border border-lime-600 w-full sm:w-80 rounded-lg bg-white">
                        <a href="#!">
                            <img
                                className="rounded-t-lg"
                                src={d.imgUrl}
                                alt="" />
                        </a>
                        <div className="p-6">
                            <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                {d.title}
                            </h5>
                            <p className="mb-4 text-base text-neutral-600">
                                {d.description}...
                            </p>
                            
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ActivityCard
