import React from 'react'

import './style.scss'

export default ({ className = 'scene', id = '', reference = null }) => {
    return (
        <div className='canvas-container'>
            <canvas
                ref={reference}
                className={className}
                id={id}
                tabIndex={0}
            />
        </div>
    )
}