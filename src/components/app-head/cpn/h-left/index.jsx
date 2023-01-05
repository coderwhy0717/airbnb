import React, { memo } from 'react'
import IconLogo from '@/asstes/svg/icon-logo'
import { HLeftWrapper } from './style'

const HLeft = memo(() => {
  return (
    <HLeftWrapper>
      <div className="logo">
        <IconLogo />
      </div>
    </HLeftWrapper>
  )
})

export default HLeft
