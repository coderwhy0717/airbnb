import React, { memo } from 'react'
import IconLogo from '@/asstes/svg/icon-logo'
import { HLeftWrapper } from './style'
import { useNavigate } from 'react-router-dom'

const HLeft = memo(() => {
  const navigate = useNavigate()
  const changeNavigate = () => {
    navigate('/home')
  }
  return (
    <HLeftWrapper>
      <div className="logo" onClick={changeNavigate}>
        <IconLogo />
      </div>
    </HLeftWrapper>
  )
})

export default HLeft
