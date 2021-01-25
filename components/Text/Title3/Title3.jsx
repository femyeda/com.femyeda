import React from 'react'
import clsx from 'clsx'

const Title3 = props => {
  return (
    <p className={clsx(props?.color, props?.classes, 'Title3Component font-thin text-lg')}>
      {props.children}
    </p>
  )
}

export default Title3
