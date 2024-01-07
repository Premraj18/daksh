import React from 'react'

const ActivityCard = ({ item }) => {
    return (
        <div className='container w-full'>
            <div className='flex justify-center md:gap-x-14 gap-y-14 flex-wrap'>
                {item.map((d) => {
                    return (
                        <div key={d.id} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="block border-4 border-lime-600 w-full sm:w-80 rounded-lg bg-white h-80">
                                <img className="h-full w-full rounded-md object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={d.imgUrl} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className=" text-3xl font-semibold text-white mb-3">{d.title}</h1>
                                <p className="mb-3 text-lg text-slate-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ActivityCard

