import HouseCover from '@/components/house-cover'
import NavCitysBtn from '@/components/nav-citys-btn'
import NavTitle from '@/components/nav-title'
import { fetchHomeDataAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HomeWrapper } from './style'

const Home = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction('aaa'))
  }, [dispatch])
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo
    }),
    shallowEqual
  )
  return (
    <HomeWrapper>
      {/* home_banner */}
      <div className="bgc"></div>
      <div className="main">
        {/* 标题 */}
        <NavTitle
          title={goodPriceInfo.title}
          describe={goodPriceInfo.subtitle}
        />
        {/* 城市按钮 */}
        <NavCitysBtn
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
        />
        {/* 城市房子 想封装就封装 */}
        <div className="hosuecover-box">
          {goodPriceInfo?.list?.slice(0, 8).map((item) => {
            return <HouseCover key={item.id} itemData={item} />
          })}
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
