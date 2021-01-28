import React, { useState } from 'react'
import {
    String,
    Quark,
} from '../..'
import './style.scss'

export default ({ text, showWhen }) => {
    const [show, setShow] = useState(null)

    return (
        <div className={`hint hint--${show ?? showWhen ? 'show' : 'hide'}`}>
            <i>!</i>
            <String.Text type='light-paragraph'>{ text }</String.Text>
            <Quark.Button click={() => setShow(false)}/>
        </div>
    )
}