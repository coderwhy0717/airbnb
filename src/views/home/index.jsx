import { fetchHomeDataAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HomeWrapper } from './style'
import DestinationV3 from './cpn/destination-v3'
import GoodPriceV4 from './cpn/good-price-v4'
import { objectChange } from '@/utils/object-change'
import HomePlusScrollV4 from './cpn/home-plus-scroll-v4'
import HomeLongForV5 from './cpn/home-longfor-v5'

const Home = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction('aaa'))
  }, [dispatch])
  const {
    goodPriceInfo,
    disCount,
    highscore,
    homePlus,
    hotRecommend,
    longFor
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      disCount: state.home.disCount,
      highscore: state.home.highscore,
      homePlus: state.home.homePlus,
      hotRecommend: state.home.hotRecommend,
      longFor: state.home.longFor
    }),
    shallowEqual
  )
  return (
    <HomeWrapper>
      {/* home_banner */}
      <div className="bgc"></div>
      <div className="main">
        {/* 热门目的地 */}
        {objectChange(disCount) && <DestinationV3 disCount={disCount} />}
        {/* 探索佛山的精彩之地 */}
        {objectChange(hotRecommend) && (
          <DestinationV3 disCount={hotRecommend} />
        )}
        {/* 你可能也想去 */}
        {objectChange(longFor) && <HomeLongForV5 longFor={longFor} />}
        {/* 高性价比房源 */}
        {objectChange(goodPriceInfo) && (
          <GoodPriceV4 houseInfo={goodPriceInfo} />
        )}
        {/* 高分好评房源 */}
        {objectChange(highscore) && <GoodPriceV4 houseInfo={highscore} />}
        {/* 爱彼迎Plus房源 */}
        {objectChange(homePlus) && <HomePlusScrollV4 houseInfo={homePlus} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
