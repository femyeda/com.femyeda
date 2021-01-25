import React from 'react'
import clsx from 'clsx'

const Caption2 = props => {
  return <p className={clsx(props?.color, props?.classes, 'Caption2Component')}>{props.children}</p>
}

export default Caption2
