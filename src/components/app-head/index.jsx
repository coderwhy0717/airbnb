import React, { memo } from 'react'
import { HeadWrapper } from './style'
import HLeft from './cpn/h-left'
import HConent from './cpn/h-conent'
import HRight from './cpn/h-right'
const AppHead = memo(() => {
  return (
    <HeadWrapper>
      <HLeft />
      <HConent />
      <HRight />
    </HeadWrapper>
  )
})

export default AppHead
