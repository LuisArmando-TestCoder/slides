import React from 'react'
import {
    RecoilRoot,
} from 'recoil'
import {
    Helmet,
} from 'react-helmet'
import RecoilOutside from 'recoil-outside'
import './style.scss'

const HelmetWrapper = Helmet as any

export default ({ children, title }) => (
    <RecoilRoot>
        <HelmetWrapper title={title}/>
        <RecoilOutside/>
        { children }
    </RecoilRoot>
)