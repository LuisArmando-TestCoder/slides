import React from 'react'
import {
  Atom,
  Quark,
  String,
} from '../components'

export default () => (
  <String.GlobalWrapper title='Home'>
    <Atom.Form
      title='This is a form'
      text='This information will go in your certificate'
      save={() => {}}
      inputs={[
        {
          placeholder: 'Your name',
          name: 'name',
          type: 'text',
        },
        {
          placeholder: 'Your age',
          name: 'age',
          type: 'date',
        },
      ]}
    />
    <Atom.Hint text='This is a hint' showWhen={true}/>
    <Atom.CTACanvas
      scenes2D={['defaultScene']}
      CTAAction={() => {}}
      message='You did it!'
      CTAButtonText='Continue here'
    />
    <Quark.Button
      click={() => {}}
      text='Button'
      icon='https://images.pexels.com/photos/1125056/pexels-photo-1125056.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    />
    <String.Text type='dark-paragraph'>dark-paragraph</String.Text>
    <String.Text type='light-paragraph'>light-paragraph</String.Text>
    <String.Text type='title'>title</String.Text>
    <String.Text type='subtitle'>subtitle</String.Text>
    <String.Image
      width='400px'
      src='https://images.pexels.com/photos/3449090/pexels-photo-3449090.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    />
    <Quark.Canvas3D id='Canvas3D' scenes={[ 'defaultScene' ]}/>
    <Quark.Canvas2D id='Canvas2D' scenes={[ 'defaultScene' ]}/>
  </String.GlobalWrapper>
)