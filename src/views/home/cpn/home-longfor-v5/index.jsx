import NavTitle from '@/components/nav-title'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForWrapper } from './style'
import LongForItem from '@/components/longfor-item'
import ScrollView from '@/components/scroll-view'
// import HouseFrameFooterLabel from '@/components/house-frame-footer-label'
const HomeLongForV5 = memo((props) => {
  const { longFor } = props
  return (
    <LongForWrapper>
      <NavTitle title={longFor.title} describe={longFor.subtitle} />

      <div className="box-longfor">
        <ScrollView shadow={1}>
          {longFor.list.map((item, index) => {
            return <LongForItem key={index} itemData={item} />
          })}
        </ScrollView>
      </div>
      <div className="info-footer">
        <div className="imgbox">
          <img
            src="https://z1.muscache.cn/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
            alt=""
          />
          <span>四海无忧</span>
        </div>
        <div className="info-text">
          「AirCover
          四海无忧」为每笔境外房源订单免费提供更全面的保障。爱彼迎用户专享。
          <div>请拨打热线获取帮助：400-022-1666 或 +86-10-87833463</div>
        </div>
      </div>
      <div className="label">
        <span>了解更多</span>
      </div>
    </LongForWrapper>
  )
})

HomeLongForV5.propTypes = {
  longFor: PropTypes.object
}

export default HomeLongForV5
