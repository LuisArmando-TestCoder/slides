import React, { useEffect } from 'react'
import {
    RecoilRoot,
} from 'recoil'
import {
    enableCrossDomainRequests,
} from '../../../utils'
import {
    Helmet,
} from 'react-helmet'
import RecoilOutside from 'recoil-outside'
import './style.scss'

const HelmetWrapper = Helmet as any

export default ({ children, title }) => {
    useEffect(enableCrossDomainRequests, [])

    return (
        <RecoilRoot>
            <HelmetWrapper title={title}/>
            <RecoilOutside/>
            { children }
        </RecoilRoot>
    )
}