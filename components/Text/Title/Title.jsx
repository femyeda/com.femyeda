import React from 'react'
import clsx from 'clsx'

const Title = props => {
  return (
    <p className={clsx(props?.color, props?.classes, 'TitleComponent font-thin text-2xl')}>
      {props.children}
    </p>
  )
}

export default Title
