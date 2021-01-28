import React from 'react'
import './style.scss'

const TextType = {
    Title: ({ children, className }) => <h2 className={className}>{ children }</h2>,
    DarkParagraph: ({ children, className }) => <p className={className}>{ children }</p>,
    LightParagraph: ({ children, className }) => <p className={className}>{ children }</p>,
    Important: ({ children, className }) => <b className={className}>{ children }</b>,
}

function getCamelCaseFromSkewed(text: string) {
    const splitTexts = text.split('-')
    const firstUppercaseLetters = splitTexts.map(word => word[0].toUpperCase())

    return splitTexts.map((word, index) => {
        return word.replace(word[0], firstUppercaseLetters[index])
    }).join('')
}
class Properties {
    children: any
    type: 'title' | 'dark-paragraph' | 'light-paragraph' | 'subtitle'
}

export default (properties: Properties) => {
    const camelCaseFromSkewed = getCamelCaseFromSkewed(properties.type)
    const Text = TextType[camelCaseFromSkewed]

    return <Text className={properties.type}>{ properties.children }</Text>
}