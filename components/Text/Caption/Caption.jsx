import React from 'react'
import clsx from 'clsx'

const Caption = props => {
  return <p className={clsx(props?.color, props?.classes, 'CaptionComponent')}>{props.children}</p>
}

export default Caption
