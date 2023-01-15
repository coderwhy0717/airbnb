import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import ScrollView from '../scroll-view'
import { CitysBtnWrapper } from './style'

const CitysBtns = memo((props) => {
  const { citys = [], fnName } = props
  const [currentindex, setCurrentindex] = useState(0)
  const changeClick = (name, index) => {
    setCurrentindex(index)
    fnName(name, index)
  }
  return (
    <CitysBtnWrapper>
      <ScrollView>
        {citys.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames('item', {
                active: index === currentindex
              })}
              onClick={(e) => changeClick(item, index)}
            >
              <span>{item}</span>
            </div>
          )
        })}
      </ScrollView>
    </CitysBtnWrapper>
  )
})

CitysBtns.propTypes = {
  citys: PropTypes.array,
  fnName: PropTypes.func
}

export default CitysBtns
