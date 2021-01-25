import React from 'react'
import clsx from 'clsx'

const Subheadline = props => {
  return (
    <p className={clsx(props?.color, props?.classes, 'SubheadlineComponent font-semibold text-base')}>
      {props.children}
    </p>
  )
}

export default Subheadline
