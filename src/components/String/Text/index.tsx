import React from 'react'
import './style.scss'

const TextType = {
    'title': ({ children, className }) => <h2 className={className}>{ children }</h2>,
    'dark-paragraph': ({ children, className }) => <p className={className}>{ children }</p>,
    'light-paragraph': ({ children, className }) => <p className={className}>{ children }</p>,
    'subtitle': ({ children, className }) => <b className={className}>{ children }</b>,
}
class Properties {
    children: any
    type: 'title' | 'dark-paragraph' | 'light-paragraph' | 'subtitle'
}

export default (properties: Properties) => {
    const Text = TextType[properties.type]

    return <Text className={properties.type}>{ properties.children }</Text>
}