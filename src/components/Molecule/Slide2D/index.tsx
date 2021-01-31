import React, { useState } from 'react'
import {
    String,
    Quark,
    Atom,
} from '../..'
import './style.scss'

// contents = content[] = { subtitle, paragraph, image }[]
export default ({ title, contents, out }) => {
    const [index, setIndex] = useState(0)

    return (
        <section className='slide-2d'>
            <String.Text type='title'>{ title }</String.Text>
            <String.Text type='subtitle'>{ contents[index].subtitle }</String.Text>
            <String.Text type='dark-paragraph'>{ contents[index].paragraph }</String.Text>
            <div className='slide-2d__container'>
                <Atom.SlideButton
                    onSlide={setIndex}
                    length={contents.length}
                />
            </div>
            <String.Image src={contents[index].image}/>
            <div className='slide-2d__container'>
                <Quark.Button
                    text={index < contents.length - 1 ? 'Skip' : 'Continue'}
                    icon='../../icon/arrow.svg'
                    click={out}
                />
            </div>
        </section>
    )
}