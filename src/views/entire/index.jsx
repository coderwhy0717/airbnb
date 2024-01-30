import React, { memo, useEffect } from 'react'
import EntireContent from './c-cpns/entire-content'
import EntireHeadeLabel from './c-cpns/entire-head-label'
import EntireSorter from './c-cpns/Entire-sorter'
import {
  // changeCurrentPageAction,
  fetchEntireDataAction
} from '@/store/modules/entire'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { EntireWrapper } from './style'
import LoadingAnimation from '@/components/loading-animation'

const Entire = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const dispatch = useDispatch()
  useEffect(() => {
    // 页码
    // dispatch(changeCurrentPageAction(2))
    // 请求数据
    dispatch(fetchEntireDataAction(3))
  }, [dispatch])
  const { showEntireLoading, totalCount } = useSelector(
    (state) => ({
      showEntireLoading: state.entire.showEntireLoading,
      totalCount: state.entire.totalCount
    }),
    shallowEqual
  )

  return (
    <EntireWrapper showEntireLoading={showEntireLoading} show={totalCount}>
      {/* loading */}

      {!showEntireLoading && <LoadingAnimation />}
      <EntireHeadeLabel />
      <EntireContent />

      {!!totalCount && <EntireSorter totalCount={totalCount / 20} />}
    </EntireWrapper>
  )
})

export default Entire
