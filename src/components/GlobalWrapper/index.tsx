import React from 'react'
import {
    RecoilRoot,
} from 'recoil'
import RecoilOutside from 'recoil-outside'
import './style.scss'

export default ({ children }) => (
    <RecoilRoot>
        <RecoilOutside/>
        { children }
    </RecoilRoot>
)