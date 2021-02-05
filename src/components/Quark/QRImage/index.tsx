import React, { useEffect, useState } from 'react'
import { useQrious } from 'react-qrious'
import {
    String
} from '../..'

export default ({
    value,
    size = 280,
    background = '#fff',
    foreground = '#000',
    getValueSetter = ((setter: React.SetStateAction<any>): void => {})
}) => {
    const [QRValue, setQRValue] = useState(value)
    const [dataUrl] = useQrious({
        value: QRValue,
        size,
        background,
        foreground,
    })

    useEffect(() => {
        getValueSetter(setQRValue)
    }, [])

    return (
        <String.Image src={dataUrl}/>
    )
}