import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const IndicatorView = memo((props) => {
  const { currentIndex = 0, width = 50, aotuHeight = true } = props
  const itemRef = useRef()

  useEffect(() => {
    // console.dir(itemRef.current.children[currentIndex])
    const instance = itemRef.current.children[currentIndex]
    // console.log(currentIndex)
    const clientWidth = itemRef.current.clientWidth
    const itemLeft = instance.offsetLeft
    const itemWidth = instance.offsetWidth
    const scrollWidth = itemRef.current.scrollWidth
    // console.log(clientWidth, itemLeft, itemWidth, scrollWidth)
    let distance = itemLeft + itemWidth * 0.5 - clientWidth * 0.5
    // console.log(distance)
    if (distance < 0) distance = 0
    if (distance > scrollWidth - clientWidth)
      distance = scrollWidth - clientWidth
    itemRef.current.style.transform = `translateX(${-distance}px)`
  }, [currentIndex])
  return (
    <IndicatorWrapper width={width} aotuHeight={aotuHeight}>
      <div className="wrapper" ref={itemRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

IndicatorView.propTypes = {
  currentIndex: PropTypes.number,
  width: PropTypes.any
}

export default IndicatorView
