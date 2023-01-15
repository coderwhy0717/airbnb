import React, { memo } from 'react'

import { NotFoundWrapper } from './style'

const NotFound = memo(() => {
  return (
    <NotFoundWrapper>
      <div className="box">NotFound</div>
    </NotFoundWrapper>
  )
})

export default NotFound
