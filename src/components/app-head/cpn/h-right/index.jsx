import IconAvatar from '@/asstes/svg/icon-avatar'
import IconGlobal from '@/asstes/svg/icon-global'
import IconMenu from '@/asstes/svg/icon-menu'
import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HRightWrapper } from './style'

const HRight = memo(() => {
  const [isshow, setIsshow] = useState(false)
  const navigate = useNavigate()
  const changeText = () => {
    navigate('/abc')
  }
  useEffect(() => {
    function fn(e) {
      console.log('b')
      e.stopPropagation() //阻止冒泡
      setIsshow(false)
    }
    window.addEventListener('click', fn)
    return () => {
      window.removeEventListener('click', fn)
    }
  }, [])

  function changeInfo(e) {
    console.log('a')
    e.stopPropagation() //阻止冒泡

    setIsshow(!isshow)
  }

  return (
    <HRightWrapper isshow={isshow}>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal />
        </span>
      </div>
      <div className="info" onClick={(e) => changeInfo(e)}>
        <div className="menu">
          <IconMenu />
        </div>
        <div className="avatar">
          <IconAvatar />
        </div>
      </div>
      {isshow && (
        <div className="info-btns">
          <div className="login">
            <div className="item">注册</div>
            <div className="item">登录</div>
          </div>
          <div className="else">
            <div className="item">来爱彼迎发布房源</div>
            <div className="item" onClick={changeText}>
              开展体验
            </div>
            <div className="item">帮助</div>
          </div>
        </div>
      )}
    </HRightWrapper>
  )
})

export default HRight
