import React from 'react'
import {
    String,
} from '../../'
import './style.scss'

export default ({ click, text = '', icon = null }) => (
    <button className='button' onClick={click}>
        <String.Text type='light-paragraph'>
            { text }
        </String.Text>
        {
            icon &&
            <String.Image src={icon}/>
        }
    </button>
)