import React from 'react'
import {
    String,
    Quark,
} from '../..'
import './style.scss'

function getDataHash(data) {
    const JSONLikeData = JSON.stringify(data)
    let hash = 0

    for (let i = 0; i < JSONLikeData.length; i++) {
        const character = JSONLikeData.charCodeAt(i)

        hash = ((hash << 5) - hash) + character
        hash = hash & hash
    }

    return hash
}

export default ({ message, scenes2D, CTAAction, CTAButtonText }) => {
    const id = `id${getDataHash(message + CTAButtonText)}`

    return (
        <section className='cta-canvas'>
            <Quark.Canvas2D
                scenes={scenes2D}
                clearFunction={() => {}}
                id={id}
            />
            <String.Text type='title'>
                { message }
            </String.Text>
            <Quark.Button
                text={CTAButtonText}
                click={CTAAction}
                icon='../../icon/arrow.svg'
            />
        </section>
    )
}