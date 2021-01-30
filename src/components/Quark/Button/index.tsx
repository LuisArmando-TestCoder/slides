import React from 'react'
import {
    String,
} from '../../'
import './style.scss'

type ButtonTypes = 'button' | 'reset' | 'submit'

export default ({ click, text = '', icon = null, type = 'button' as ButtonTypes }) => (
    <button type={type} className='button' onClick={click}>
        <String.Text type='light-paragraph'>
            { text }
        </String.Text>
        {
            icon &&
            <String.Image src={icon}/>
        }
    </button>
)