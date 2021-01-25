import React from 'react'
import clsx from 'clsx'

const Subtitle = props => {
  return (
    <p className={clsx(props?.color, props?.classes, 'SubtitleComponent font-thin text-base')}>
      {props.children}
    </p>
  )
}

export default Subtitle
