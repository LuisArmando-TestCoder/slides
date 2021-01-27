import React from 'react'

import './style.scss'

export default ({ className = 'scene', id = '' }) => {
    return (
        <canvas
            className={className}
            id={id}
            tabIndex={0}
        />
    )
}