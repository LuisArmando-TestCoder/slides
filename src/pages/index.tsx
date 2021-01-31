import React from 'react'
import {
  Molecule,
  Atom,
  Quark,
  String,
} from '../components'

export default () => (
  <String.GlobalWrapper title='Home'>
    <Molecule.Slide2D
      contents={[
        {
          subtitle: 'subtitle A',
          paragraph: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
          pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
          Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
          in pretium orci vestibulum eget.
          `,
          image: 'https://images.pexels.com/photos/4844208/pexels-photo-4844208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        },
        {
          subtitle: 'subtitle B',
          paragraph: `
          Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
          vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
          Integer eu nibh at nisi ullamcorper sagittis id vel leo.
          `,
          image: 'https://images.pexels.com/photos/5345858/pexels-photo-5345858.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        },
      ]}
      title='Slides2D'
      out={() => {}}
    />
    <Atom.SlideButton
      onSlide={() => {}}
      length={15}
    />
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