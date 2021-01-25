import React from 'react'
import clsx from 'clsx'

const Body = props => {
  return <p className={clsx(props?.color, props?.classes, 'BodyComponent')}>{props.children}</p>
}

export default Body
