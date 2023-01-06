import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HouseCoverWrapper } from './style'
import Rating from '@mui/material/Rating'
const HouseCover = memo((props) => {
  const { itemData = {} } = props
  return (
    <HouseCoverWrapper
      verifyColor={itemData.verify_info.text_color ?? '#39576a'}
    >
      <div className="box-img">
        <img src={itemData.picture_url} alt="" />
      </div>
      <div className="message">{itemData.verify_info.messages.join(' · ')}</div>
      <div className="house-name">{itemData.name}</div>
      <div className="price">￥{itemData.price}/晚</div>
      <div className="reviews">
        {/*  */}
        <Rating
          value={itemData.star_rating ?? 5}
          readOnly
          precision={0.1}
          sx={{ fontSize: '12px', color: '#00848A' }}
        />

        <span className="reviews-count">{itemData.reviews_count}</span>
        {itemData.bottom_info?.content && (
          <span>
            &nbsp;·&nbsp;
            <span className="score">{itemData.bottom_info?.content}</span>
          </span>
        )}
      </div>
    </HouseCoverWrapper>
  )
})

HouseCover.propTypes = {
  itemData: PropTypes.object
}

export default HouseCover
