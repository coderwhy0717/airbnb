import PropTypes from 'prop-types'
import IconLove from '@/asstes/svg/icon-love'
import IconShare from '@/asstes/svg/icon-share'
import React, { memo } from 'react'
import { ImageViewWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'

const DetailImageView = memo((props) => {
  const housedata = JSON.parse(window.localStorage.getItem('housedetail'))
  const { lookImagesClick, changeGoTo } = props
  const { isShowAppHead: isShow } = useSelector(
    (state) => ({
      isShowAppHead: state.detail.isShowAppHead
    }),
    shallowEqual
  )
  return (
    <ImageViewWrapper isShow={isShow}>
      <div className="image-box">
        {housedata &&
          housedata.picture_urls.slice(0, 1).map((item, index) => {
            return (
              <div key={item} className="imgleft">
                <img src={item} alt="" onClick={(e) => changeGoTo(index)} />
                <div className="cover-bgc"></div>
              </div>
            )
          })}
        <div className="imgboxright">
          {housedata &&
            housedata.picture_urls.slice(1, 5).map((item, index) => {
              return (
                <div className="boximgs" key={item}>
                  <img
                    src={item}
                    alt=""
                    onClick={(e) => changeGoTo(index + 1)}
                  />
                  <div className="cover-bgc"></div>
                </div>
              )
            })}
        </div>
        <div className="icon-item icon-share">
          <IconShare />
          <span>分享</span>
        </div>
        <div className="icon-item icon-love">
          <IconLove />
          <span>收藏</span>
        </div>
        <div className="icon-item look-image" onClick={lookImagesClick}>
          <span>查看照片</span>
        </div>
      </div>
    </ImageViewWrapper>
  )
})

DetailImageView.propTypes = {
  lookImagesClick: PropTypes.func,
  changeGoTo: PropTypes.func
}

export default DetailImageView
