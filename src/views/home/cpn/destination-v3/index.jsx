import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { DestinationWrapper } from './style'
import NavTitle from '@/components/nav-title'
import CitysBtns from '@/components/citys-btns'
import HouseFrame from '@/components/house-frame'
import HouseFrameFooterLabel from '@/components/house-frame-footer-label'
const DestinationV3 = memo((props) => {
  const { disCount } = props
  const [name, setName] = useState(Object.keys(disCount.dest_list ?? {})[0])
  const citys = disCount.dest_address?.map((item) => item.name)
  const fnName = useCallback((name, index) => {
    console.log('first', name, index)
    setName(name)
  }, [])
  return (
    <DestinationWrapper>
      <NavTitle title={disCount.title} describe={disCount.subtitle} label={0} />
      {/* 城市按钮封装 */}
      <CitysBtns citys={citys} fnName={fnName} />
      <HouseFrame houseList={disCount?.dest_list?.[name]} width="33.3333%" />
      <HouseFrameFooterLabel name={name} />
    </DestinationWrapper>
  )
})

DestinationV3.propTypes = {
  disCount: PropTypes.object
}

export default DestinationV3
