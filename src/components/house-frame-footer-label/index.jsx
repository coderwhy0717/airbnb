import IconRightArrow from '@/asstes/svg/icon-right-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterLabelWrapper } from './style'
const HouseFrameFooterLabel = memo((props) => {
  const { name } = props
  let title = '显示全部'
  if (name) title = `查看更多${name}房源`
  const navigate = useNavigate()
  const changeEntire = () => {
    navigate('/entire')
  }
  return (
    <FooterLabelWrapper name={name} onClick={changeEntire}>
      <div className="title">{title}</div>
      <IconRightArrow />
    </FooterLabelWrapper>
  )
})

HouseFrameFooterLabel.propTypes = {
  name: PropTypes.string
}

export default HouseFrameFooterLabel
