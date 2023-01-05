import IconSearch from '@/asstes/svg/icon-search'
import React, { memo } from 'react'
import { HConentWrapper } from './style'

const HConent = memo(() => {
  return (
    <HConentWrapper>
      <div className="search">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearch />
        </div>
      </div>
    </HConentWrapper>
  )
})

export default HConent
