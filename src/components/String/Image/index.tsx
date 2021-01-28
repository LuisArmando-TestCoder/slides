import React from 'react'
import './style.scss'

export default ({ src, width = null, height = null }) => (
    <img className='image' src={src} width={width} height={height}/>
)