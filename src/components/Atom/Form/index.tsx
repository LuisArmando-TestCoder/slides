import React from 'react'
import {
    String,
    Quark,
} from '../..'
import './style.scss'

// inputs = Input[] = { placeholder, name, type }[]
export default ({ subtitle, text, inputs, save }) => {

    return (
        <form className='form'>
            <String.Text type='subtitle'>{ subtitle }</String.Text>
            <ul>
                {
                    inputs.map((properties, index) => {
                        return (
                            <li key={index + properties.name}>
                                <input {...properties}/>
                            </li>
                        )
                    })
                }
            </ul>
            <Quark.Button click={save} text='Guardar información'/>
        </form>
    )
}