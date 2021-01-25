import React from 'react'
import clsx from 'clsx'

const Title2 = props => {
  return (
    <p className={clsx(props?.color, props?.classes, 'Title2Component font-thin text-xl')}>
      {props.children}
    </p>
  )
}

export default Title2
