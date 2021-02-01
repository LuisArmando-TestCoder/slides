import React from 'react'
import {
    Quark,
} from '../..'
import html2Canvas from 'html2canvas'

export default ({ name = '', onPrint, elementToPrint = document.body }) => (
    <div className='print-button'>
        <Quark.Button click={async () => {
            const canvas = await html2Canvas(elementToPrint)
            const image = new Image()

            image.src = canvas.toDataURL()

            image.addEventListener('load', () => onPrint(image))
        }} text={`Print ${name}`}/>
    </div>
)