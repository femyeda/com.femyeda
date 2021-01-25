import React from 'react'
import clsx from 'clsx'

const Largetitle = props => {
  return (
    <p className={clsx(props?.color, props?.classes, 'LargetitleComponent font-thin text-3xl')}>
      {props.children}
    </p>
  )
}

export default Largetitle
