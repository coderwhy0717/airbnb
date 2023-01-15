import IconRightArrow from '@/asstes/svg/icon-right-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { NavWrapper } from './style'

const NavTitle = memo((props) => {
  const { title, describe, label = 1 } = props
  return (
    <NavWrapper label={label}>
      <div className="title-box">
        <div>
          <h2>{title}</h2>
          {describe ? <div className="describe">{describe}</div> : ''}
        </div>
        <div className="rightArrow">
          <IconRightArrow />
        </div>
      </div>
    </NavWrapper>
  )
})

NavTitle.propTypes = {
  title: PropTypes.string,
  describe: PropTypes.string,
  label: PropTypes.number
}

export default NavTitle
