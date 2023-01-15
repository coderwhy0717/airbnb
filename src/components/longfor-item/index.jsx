import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForItemWrapper } from './style'

const LongForItem = memo((props) => {
  const { itemData } = props
  return (
    <LongForItemWrapper>
      <div className="info">
        <div className="boximg">
          <img src={itemData.picture_url} alt="" />
          <div className="shadow"></div>
        </div>

        <div className="box-info">
          <div className="name">{itemData.city}</div>
          <div className="price">均价 {itemData.price}</div>
        </div>
      </div>
    </LongForItemWrapper>
  )
})

LongForItem.propTypes = {
  itemData: PropTypes.object
}

export default LongForItem
