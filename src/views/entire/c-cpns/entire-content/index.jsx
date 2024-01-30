// import PropTypes from 'prop-types'
import HouseCover from '@/components/house-cover'
import { objectChange } from '@/utils/object-change'
import React, { Fragment, memo, useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ContentWrapper } from './style'

const EntireContent = memo((props) => {
  const { entireList, totalCount } = useSelector(
    (state) => ({
      entireList: state.entire.entireList,
      totalCount: state.entire.totalCount
    }),
    shallowEqual
  )
  const navigate = useNavigate()
  const changeItemFn = useCallback(() => {
    navigate('/detail')
    // 重制widow滚动
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }, [navigate])

  return (
    <ContentWrapper>
      {/* 判断 */}
      {objectChange(entireList) && (
        <Fragment>
          {/* 周租月租 */}
          <div className="top-img">
            <img
              src="https://z1.muscache.cn/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-trophy.9ee78aa12d1a51a64b1dc566a4391ba5.gif"
              alt=""
            />
            <span className="bold">周租月租，高品质房源优惠住</span>
            <span>
              设施齐全、性价比高，还可筛选「周租月租优惠」享受好价，现在就抢订适合长住的好房
            </span>
          </div>
          {/* 住宿 */}
          {!!totalCount && (
            <h2 className="title">
              <span>{totalCount}</span>
              多处住宿
            </h2>
          )}
          {/*   items */}
          <div className="slides">
            {entireList.map((item) => {
              return (
                <HouseCover
                  changeItemFn={changeItemFn}
                  key={item._id}
                  itemData={item}
                  width={'20%'}
                />
              )
            })}
          </div>
        </Fragment>
      )}
    </ContentWrapper>
  )
})

EntireContent.propTypes = {}

export default EntireContent
