import React from 'react'
import {
  Quark,
  String,
} from '../components'

export default () => (
  <String.GlobalWrapper title='Home'>
    <Quark.Canvas3D id='Canvas3D' scenes={[ 'defaultScene' ]}/>
    <Quark.Canvas2D id='Canvas2D' scenes={[ 'defaultScene' ]}/>
  </String.GlobalWrapper>
)