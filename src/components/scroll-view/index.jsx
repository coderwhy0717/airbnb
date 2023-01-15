import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollWrapper } from './style'
import PropTypes from 'prop-types'

import IconLeftArrow from '@/asstes/svg/icon-left-arrow'
import IconRightArrow from '@/asstes/svg/icon-right-arrow'
const ScrollView = memo((props) => {
  // 1 显示 0 不显示 bgc  shadowPosition 按钮的定位
  const { showBgc = 1, shadow = 0 } = props
  const itemRef = useRef()

  const currentindexRef = useRef(0)

  const totoDistanceRef = useRef()

  const [showRight, setShowRight] = useState(false)
  const [showLeft, setShowLeft] = useState(false)

  useEffect(() => {
    const scrollWidth = itemRef.current.scrollWidth
    const clientWidth = itemRef.current.clientWidth
    // currentindexRef 记录了 当前位置的距离
    let newEl = itemRef.current.children[currentindexRef.current]?.offsetLeft
    // console.log(currentindexRef.current, '第一次')
    // console.log(newEl, '第一次')
    // 右边还没滚出的距离  -  左边已经滚出的距离 = 还有没有滚动的距离了
    totoDistanceRef.current = scrollWidth - clientWidth

    // 不能大于0 点击btns会让这个 组件 从新渲染 因为props.children改变了
    setShowRight(totoDistanceRef.current > newEl)
  }, [props.children])

  const changeIndex = (index) => {
    // console.log(index, !index)
    if (!index) {
      currentindexRef.current += 1
    } else {
      currentindexRef.current -= 1
    }
    let newEl = itemRef.current.children[currentindexRef.current].offsetLeft
    itemRef.current.style.transform = `translate(${-newEl}px)`
    setShowRight(totoDistanceRef.current > newEl)
    setShowLeft(newEl > 0)
  }
  return (
    <ScrollWrapper showBgc={showBgc} shadow={shadow}>
      {showLeft && (
        <div className="boxbtn">
          {!!showBgc && <div className="xuying"></div>}
          <div className="icon icon-left" onClick={(e) => changeIndex(1)}>
            <IconLeftArrow />
          </div>
        </div>
      )}
      {showRight && (
        <div className="boxbtn boxright">
          {!!showBgc && <div className="xuanying-right"></div>}

          <div className="icon icon-right" onClick={(e) => changeIndex(0)}>
            <IconRightArrow />
          </div>
        </div>
      )}

      <div className="scroll">
        <div className="conent" ref={itemRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  )
})

ScrollView.prototype = {
  showBgc: PropTypes.number
}

export default ScrollView
