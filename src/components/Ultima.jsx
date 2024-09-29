/* eslint-disable react/jsx-key */

import images from '../exports/images.js'
import '../styles/slider.css'
import { motion } from 'framer-motion'

const Ultima = () => {
  return (
    <motion.div className='slider-container'>
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left:-2123}} >
        {images.map(image => (
            <motion.div className='item'>
                <img src={image} alt="" />
            </motion.div>
        ))}
        </motion.div>
        
    </motion.div>
  )
}

export default Ultima