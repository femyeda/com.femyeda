import React from 'react'
import clsx from 'clsx'
import Body from './Body'
import Caption from './Caption'
import Caption2 from './Caption2'
import Footnote from './Footnote'
import Headline from './Headline'
import Largetitle from './Largetitle'
import Overline from './Overline'
import Subheadline from './Subheadline'
import Subtitle from './Subtitle'
import Title from './Title'
import Title2 from './Title2'
import Title3 from './Title3'

const Text = props => {
  switch (props?.variant) {
    case 'overline':
      return <Overline {...props}>{props.children}</Overline>
    case 'body':
      return <Body {...props}>{props.children}</Body>
    case 'caption':
      return <Caption {...props}>{props.children}</Caption>
    case 'caption2':
      return <Caption2 {...props}>{props.children}</Caption2>
    case 'footnote':
      return <Footnote {...props}>{props.children}</Footnote>
    case 'headline':
      return <Headline {...props}>{props.children}</Headline>
    case 'largetitle':
      return <Largetitle {...props}>{props.children}</Largetitle>
    case 'subheadline':
      return <Subheadline {...props}>{props.children}</Subheadline>
    case 'subtitle':
      return <Subtitle {...props}>{props.children}</Subtitle>
    case 'title':
      return <Title {...props}>{props.children}</Title>
    case 'title2':
      return <Title2 {...props}>{props.children}</Title2>
    case 'title3':
      return <Title3 {...props}>{props.children}</Title3>
    default:
      return (
        <p className={clsx(props?.color, props?.classes, 'TextComponent font-light text-lg')}>{props.children}</p>
      )
  }
}

export default Text
