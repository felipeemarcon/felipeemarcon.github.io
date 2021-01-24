import React from 'react'
import classnames from 'classnames'

// Styles
import containerStyles from './container.module.css'

export default function Container({ customClass, children }) {
  let classes = classnames(containerStyles.container, {
    [customClass]: customClass,
  })

  return <div className={classes}>{children}</div>
}
