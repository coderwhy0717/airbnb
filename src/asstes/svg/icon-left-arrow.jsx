import React, { Fragment, memo } from 'react'
import { styleToObject } from './utils'
import PropTypes from 'prop-types'

const IconLeftArrow = memo((props) => {
  const { height = 12, width = 12 } = props

  return (
    <Fragment>
      <div>
        <svg
          viewBox="0 0 18 18"
          role="img"
          aria-hidden="false"
          aria-label="previous"
          focusable="false"
          style={styleToObject(
            `height: ${height}px; width: ${width}px; display: block; fill: currentcolor;`
          )}
        >
          <path
            d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
    </Fragment>
  )
})
IconLeftArrow.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}
export default IconLeftArrow
