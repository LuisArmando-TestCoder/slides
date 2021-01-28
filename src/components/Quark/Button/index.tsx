import React from 'react'
import {
    String,
} from '../../'

export default ({ click, text = '', icon = null }) => (
    <button onClick={click}>
        <String.Text type='light-paragraph'>
            { text }{
                icon ??
                <String.Image src={icon}/>
            }
        </String.Text>
    </button>
)