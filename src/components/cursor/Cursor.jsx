import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

const Cursor = () => {

const [position,setPosition] = useState({x:0,y:0})

useEffect(() => {
    const mouseMove = (e) => {
        setPosition({x:e.clientX,y:e.clientY})
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
        window.removeEventListener("mousemove", mouseMove)
    };
},[])

  return (
    <motion.div 
        className='cursor w-10 h-10 fixed '
        style={{
          borderRadius:'50%',
          border:'2px solid rgb(101 163 13)',
          zIndex:999,
        }}
        animate={{x:position.x, y: position.y}}
    >
      
    </motion.div>
  )
}

export default Cursor
