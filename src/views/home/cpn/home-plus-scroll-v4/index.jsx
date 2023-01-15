import HouseFrame from '@/components/house-frame'
import HouseFrameFooterLabel from '@/components/house-frame-footer-label'
import NavTitle from '@/components/nav-title'
import ScrollView from '@/components/scroll-view'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomePlusWrapper } from './style'

const HomePlusScrollV4 = memo((props) => {
  const { houseInfo = {} } = props

  return (
    <HomePlusWrapper>
      {/* 标题 */}
      <NavTitle title={houseInfo.title} describe={houseInfo.subtitle} />
      <HouseFrame houseList={houseInfo.list} Scroll={ScrollView} />
      <HouseFrameFooterLabel />
    </HomePlusWrapper>
  )
})

HomePlusScrollV4.propTypes = {
  houseInfo: PropTypes.object
}

export default HomePlusScrollV4
