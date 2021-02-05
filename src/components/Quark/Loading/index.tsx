import React from 'react'
import {
    String,
} from '../..'
import './style.scss'

export default ({ canShow }) => (
    <div className={`loading loading--${canShow && 'show'}`}>
        <String.Text type='dark-paragraph'>Loading</String.Text>
    </div>
)