import React from 'react'
import clsx from 'clsx'

const Headline = props => {
  return (
    <h1 className={clsx(props?.color, props?.classes, 'HeadlineComponent font-black text-xl')}>
      {props.children}
    </h1>
  )
}

export default Headline
