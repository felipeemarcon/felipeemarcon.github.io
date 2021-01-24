import React from 'react'

import gridStyles from './grid.module.css'

export default function Grid({ children }) {
  return <div className={gridStyles.containerGrid}>{children}</div>
}
