import React, { useEffect } from 'react'
import { String } from '../..'
import { callScenes3D } from '../../../utils'

export default ({ scenes, className = 'scene', id = '' }) => {
    useEffect(() => callScenes3D(scenes), [])

    return <String.Canvas className={className} id={id}/>
}