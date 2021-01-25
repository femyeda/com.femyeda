import React from 'react'
import clsx from 'clsx'

const Footnote = props => {
  return <p className={clsx(props?.color, props?.classes, 'FootnoteComponent')}>{props.children}</p>
}

export default Footnote
