import React from 'react'
import {
    String,
    Quark,
} from '../..'
import './style.scss'

// inputs = Input[] = { placeholder, name, type }[]
export default ({ title, text, inputs, save }) => {

    return (
        <form className='form'>
            <div className='form__text'>
                <String.Text type='subtitle'>{ title }</String.Text>
                <String.Text type='dark-paragraph'>{ text }</String.Text>
            </div>
            <div className='form__inputs'>
                <ul className='form__inputs__list'>
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
                <Quark.Button type='submit' click={(event) => {
                    event.preventDefault()

                    save(event)
                }} text='Save'/>
            </div>
        </form>
    )
}