import React, { useState } from 'react'
import {
    String,
    Quark,
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
            {
                index < contents.length - 1 &&
                contents.length > 1 &&
                <Quark.Button
                    text={`${index + 1} / ${contents.length}`}
                    icon='Dev-> Put an icon here'
                    click={() => setIndex(index + 1)}
                />
            }
            <String.Image src={contents[index].src}/>
            <Quark.Button
                text={index < contents.length - 1 ? 'Skip' : 'Next'}
                icon='Dev-> Put an icon here'
                click={out}
            />
        </section>
    )
}