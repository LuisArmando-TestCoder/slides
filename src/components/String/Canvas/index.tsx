import React from 'react'

import './style.scss'

export default ({ className = 'scene', id = '' }) => {
    return (
        <div className='canvas-container'>
            <canvas
                className={className}
                id={id}
                tabIndex={0}
            />
        </div>
    )
}