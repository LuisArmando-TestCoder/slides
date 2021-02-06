import React, { useEffect, useState } from 'react'
import { useQrious } from 'react-qrious'
import {
    String
} from '../..'

const QRImage = ({ QRValue, qrious }) => {
    const [dataUrl] = useQrious({ value: QRValue, ...qrious })

    return <String.Image src={dataUrl}/>
}

export default ({
    value,
    size = 280,
    background = '#fff',
    foreground = '#000',
    getValueSetter = ((setter: React.SetStateAction<any>): void => {})
}) => {
    const [QRValue, setQRValue] = useState(value)
    const [Image, setImage] = useState(null)

    useEffect(() => {
        getValueSetter(setQRValue)
        setImage(<QRImage QRValue={QRValue} qrious={{ size, background, foreground }}/>)
    }, [])

    return (
        <>{ Image }</>
    )
}