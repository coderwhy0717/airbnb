import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { NavWrapper } from './style'

const NavTitle = memo((props) => {
  const { title, describe } = props
  return (
    <NavWrapper>
      <h2>{title}</h2>
      {describe ? <div>{describe}</div> : ''}
    </NavWrapper>
  )
})

NavTitle.propTypes = {
  title: PropTypes.string,
  describe: PropTypes.string
}

export default NavTitle
