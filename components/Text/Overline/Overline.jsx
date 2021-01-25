import React from 'react'
import clsx from 'clsx'

const Overline = props => {
  return (
    <p className={clsx(props?.color, props?.classes, 'OverlineComponent text-sm uppercase font-hairline')}>
      {props.children}
    </p>
  )
}

export default Overline
