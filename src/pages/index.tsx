import React from 'react'
import {
  Canvas3D,
  Canvas2D,
} from '../components'
import {
  GlobalWrapper,
} from '../components'

export default () => (
  <GlobalWrapper>
    <Canvas3D id='Canvas3D' scenes={[ 'defaultScene' ]}/>
    <Canvas2D id='Canvas2D' scenes={[ 'defaultScene' ]}/>
  </GlobalWrapper>
)