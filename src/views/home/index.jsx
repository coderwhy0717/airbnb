import NavCitysBtn from '@/components/nav-citys-btn'
import NavTitle from '@/components/nav-title'
import React, { memo } from 'react'
import { HomeWrapper } from './style'

const Home = memo(() => {
  return (
    <HomeWrapper>
      {/* home_banner */}
      <div className="bgc"></div>
      <div className="main">
        <NavTitle
          title={'周租月租房源优惠'}
          describe={'多住几天，省钱更省心'}
        />
        <NavCitysBtn
          citys={[
            '罗马',
            '米兰',
            '巴黎',
            '威尼斯',
            '那不勒斯',
            '佛罗伦萨',
            '雅典',
            '维多利亚'
          ]}
        />
      </div>
    </HomeWrapper>
  )
})

export default Home
