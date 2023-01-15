// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { entireData } from '@/common/entire-data'
import { LabelWrapper } from './style'
import { Switch } from 'antd'
import classNames from 'classnames'
const EntireHeadeLabel = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState([entireData.length - 1])
  const changeClick = (index) => {
    if (index === entireData.length - 1) return

    const indexs = [...currentIndex]
    if (indexs.includes(index)) {
      let current = indexs.findIndex((item) => item === index)
      indexs.splice(current, 1)
    } else {
      indexs.push(index)
    }
    setCurrentIndex(indexs)
  }
  return (
    <LabelWrapper>
      <div className="box">
        <div className="box-item">
          {entireData.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames('item', {
                  active: currentIndex.includes(index)
                })}
                onClick={(e) => changeClick(index)}
              >
                {item}
                {index === entireData.length - 1 ? (
                  <span> · {currentIndex.length}</span>
                ) : (
                  ''
                )}
              </div>
            )
          })}
        </div>
        <div className="show-map">
          <span>显示地图</span>
          <Switch className="switch" defaultChecked />
        </div>
      </div>
    </LabelWrapper>
  )
})

EntireHeadeLabel.propTypes = {}

export default EntireHeadeLabel
