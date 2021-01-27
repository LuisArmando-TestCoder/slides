import React from 'react'
import './style.scss'

class Properties {
    content: string
    className: 'title' | 'dark-paragraph' | 'light-paragraph' | 'important'
}

export default (properties: Properties) => <p className={properties.className}>{ properties.content }</p>