import React, { useEffect } from 'react'
import preset from 'canvas-preset'
import { String } from '../..'
import { getScene2DCallbacks } from '../../../utils'

interface CanvasObject {
    sceneCallbacks: Function[]
    clearFunction: Function
    id: string
}

function runCanvas(canvasObject: CanvasObject) {
    const { sceneCallbacks, clearFunction, id } = canvasObject
    const presetObject = preset(null, `#${id}`)
    const { draw, clear, size } = presetObject
    const clearCanvas = (clearFunction || (() => clear()))

    size()

    draw(() => {
        clearCanvas()

        sceneCallbacks.forEach(sceneCallback => {
            sceneCallback(presetObject)
        });
    })
}

export default ({ scenes, clearFunction = null, className = 'scene', id }) => {
    useEffect(() => {
        const sceneCallbacks = getScene2DCallbacks(scenes)

        runCanvas({ sceneCallbacks, clearFunction, id })
    }, [])

    return <String.Canvas className={className} id={id}/>
}