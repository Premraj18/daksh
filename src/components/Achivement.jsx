import React from 'react'
import Card from './Card'

const Data = [
    {
        id: "1",
        title: "Racing Car",
        description: "Team Daksh proudly announces 2nd place in Shell Eco Marathon Asia 2012 in Kuala Lumpur, Malaysia. Beyond accolades, it's about the journey and conquering new heights together, fostering a spirit of continuous improvement and teamwork led by our passionate members.",
        imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/013/923/535/small/sports-car-logo-png.png"
    },
    {
        id: "2",
        title: "Racing Car",
        description: "Team Daksh proudly announces 2nd place in Shell Eco Marathon Asia 2012 in Kuala Lumpur, Malaysia. Beyond accolades, it's about the journey and conquering new heights together, fostering a spirit of continuous improvement and teamwork led by our passionate members.",
        imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/013/923/535/small/sports-car-logo-png.png"
    },
    {
        id: "3",
        title: "Racing Car",
        description: "Team Daksh proudly announces 2nd place in Shell Eco Marathon Asia 2012 in Kuala Lumpur, Malaysia. Beyond accolades, it's about the journey and conquering new heights together, fostering a spirit of continuous improvement and teamwork led by our passionate members.",
        imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/013/923/535/small/sports-car-logo-png.png"
    },
    {
        id: "4",
        title: "Racing Car",
        description: "Team Daksh proudly announces 2nd place in Shell Eco Marathon Asia 2012 in Kuala Lumpur, Malaysia. Beyond accolades, it's about the journey and conquering new heights together, fostering a spirit of continuous improvement and teamwork led by our passionate members.",
        imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/013/923/535/small/sports-car-logo-png.png"
    },
    {
        id: "5",
        title: "Racing Car",
        description: "Team Daksh proudly announces 2nd place in Shell Eco Marathon Asia 2012 in Kuala Lumpur, Malaysia. Beyond accolades, it's about the journey and conquering new heights together, fostering a spirit of continuous improvement and teamwork led by our passionate members.",
        imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/013/923/535/small/sports-car-logo-png.png"
    },
    {
        id: "6",
        title: "Racing Car",
        description: "Team Daksh proudly announces 2nd place in Shell Eco Marathon Asia 2012 in Kuala Lumpur, Malaysia. Beyond accolades, it's about the journey and conquering new heights together, fostering a spirit of continuous improvement and teamwork led by our passionate members.",
        imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/013/923/535/small/sports-car-logo-png.png"
    },
]

const Achivement = () => {
    return (
        <div className="w-full sm:w-auto flex gap-28 flex-wrap sm:px-32 pl-4 pr-4">
            <div className='w-full'>
                <h2 className='w-full text-3xl text-center font-semibold md:text-5xl text-3xl my-12'>Our <span className='text-lime-600'>Achievements</span></h2>
            </div>
            <div className='flex justify-center md:gap-x-24 gap-y-20 flex-wrap' style={{ marginTop: '-80px' }}>
                {Data && Data.map((element) => {
                    //   console.log(element);
                    return <div className="flex" key={element.id}>
                        <Card title={element.title} description={element.description} imgUrl={element.imgUrl}
                        />
                    </div>
                })}

                <div className="w-full text-center mb-20">
                    <a href="#"
                        className="px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700">
                        Read more
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Achivement
