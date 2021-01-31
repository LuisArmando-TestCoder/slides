import React from 'react'
import {
    String,
} from '../../'
import './style.scss'

type ButtonTypes = 'button' | 'reset' | 'submit'

export default ({ click, text = '', icon = null, disableWhen = false, type = 'button' as ButtonTypes }) => (
    <button disabled={disableWhen} type={type} className={`button button--${disableWhen && 'hide'}`} onClick={click}>
        <String.Text type='light-paragraph'>
            { text }
        </String.Text>
        {
            icon &&
            <String.Image src={icon}/>
        }
    </button>
)