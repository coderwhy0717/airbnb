import IconLeftArrow from '@/asstes/svg/icon-left-arrow'
import IconRightArrow from '@/asstes/svg/icon-right-arrow'
import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { NavcitysWrapper } from './style'

const NavCitysBtn = memo((props) => {
  const { citys } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemRef = useRef()
  const changeClick = (index) => {
    setCurrentIndex(index)
  }
  const changeLeft = () => {
    console.log(itemRef)
    itemRef.current.scrollTo({
      left: itemRef.current.scrollLeft - 160,
      behavior: 'smooth'
    })
  }
  const changeRight = () => {
    console.log(itemRef)
    itemRef.current.scrollTo({
      left: itemRef.current.scrollLeft + 160,
      behavior: 'smooth'
    })
  }

  return (
    <NavcitysWrapper>
      <div className="xuying"></div>
      <div className="icon" onClick={changeLeft}>
        <IconLeftArrow />
      </div>
      <div className="content" ref={itemRef}>
        {citys?.map((item, index) => {
          return (
            <div
              key={index}
              className={currentIndex === index ? 'item cover' : 'item'}
              onClick={(e) => changeClick(index)}
            >
              {item}
            </div>
          )
        })}
      </div>
      <div className="xuanying-right"></div>
      <div className="icon-right" onClick={changeRight}>
        <IconRightArrow />
      </div>
    </NavcitysWrapper>
  )
})

NavCitysBtn.propTypes = {
  citys: PropTypes.array
}

export default NavCitysBtn
