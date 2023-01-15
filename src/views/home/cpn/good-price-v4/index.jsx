import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { GoodPriceWrapper } from './style'
import NavTitle from '@/components/nav-title'
import HouseFrame from '@/components/house-frame'
import HouseFrameFooterLabel from '@/components/house-frame-footer-label'

const GoodPriceV4 = memo((props) => {
  const { houseInfo = {} } = props
  console.log(houseInfo, 'scrollShow')

  return (
    <GoodPriceWrapper>
      {/* 标题 */}
      <NavTitle title={houseInfo.title} describe={houseInfo.subtitle} />
      {/* 城市按钮 */}
      {/* <NavCitysBtn
        citys={[
          '罗马',
          '米兰',
          '巴黎',
          '威尼斯',
          '那不勒斯',
          '佛罗伦萨',
          '雅典',
          '维多利亚',
          '拉布拉布拉',
          '维斯明斯特',
          '布鲁姆斯伯里'
        ]}
      /> */}
      <HouseFrame houseList={houseInfo?.list.slice(0, 8)} />
      <HouseFrameFooterLabel />
    </GoodPriceWrapper>
  )
})

GoodPriceV4.propTypes = {
  houseInfo: PropTypes.object
}

export default GoodPriceV4
