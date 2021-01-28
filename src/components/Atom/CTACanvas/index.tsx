import React from 'react'
import {
    String,
    Quark,
} from '../..'
import './style.scss'

export default ({ text, CTAText, scenes, action }) => {
    const id = text.join('') + CTAText.join('')

    return (
        <section className='cta-canvas'>
            <Quark.Canvas2D
                scenes={scenes}
                clearFunction={() => {}}
                id={id}
            />
            <String.Text type='title'>
                { text }
            </String.Text>
            <Quark.Button
                text={CTAText}
                click={action}
                icon='dev-> arrow asset here'
            />
        </section>
    )
}