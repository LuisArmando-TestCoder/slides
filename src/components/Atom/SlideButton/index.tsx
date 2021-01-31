import React, { useState, useEffect } from 'react'
import {
    String,
    Quark,
} from '../..'
import './style.scss'

export default ({ onSlide, length }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => onSlide(index))

    return (
        <div className='slide-button'>
            <Quark.Button
                disableWhen={index === 0}
                icon='../../icon/arrow.svg'
                click={() => {
                    setIndex(Math.max(0, index - 1))
                    onSlide(index)
                }}/>
            <String.Text type='light-paragraph'>{index + 1} / {length}</String.Text>
            <Quark.Button
                disableWhen={index + 1 === length}
                icon='../../icon/arrow.svg'
                click={() => {
                    setIndex(Math.min(length - 1, index + 1))
                    onSlide(index)
                }}/>
        </div>
    )
}