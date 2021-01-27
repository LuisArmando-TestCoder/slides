import React, { useEffect } from 'react'
import { Canvas } from '../../String'
import { callScenes3D } from '../../../utils'

export default ({ scenes, className = 'scene', id = '' }) => {
    useEffect(() => callScenes3D(scenes), [])

    return <Canvas className={className} id={id}/>
}