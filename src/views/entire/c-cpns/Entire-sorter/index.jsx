import PropTypes from 'prop-types'
import { fetchEntireDataAction } from '@/store/modules/entire'
import { createTheme, Pagination, ThemeProvider } from '@mui/material'
import { Stack } from '@mui/system'
import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SorterWrapper } from './style'

const EntireSorter = memo((props) => {
  const { totalCount = 0 } = props
  /* 自定义 颜色 */
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#222222'
      }
    }
  })
  const dispatch = useDispatch()

  const [pageIndex, setPageIndex] = useState(1)
  const onChange = (e, page) => {
    console.log(e, page)
    setPageIndex(page)
    window.scrollTo(0, 0)
    dispatch(fetchEntireDataAction(page - 1))
  }
  return (
    <SorterWrapper>
      <div>
        {/* 自定义 颜色 */}
        <ThemeProvider theme={theme}>
          <Stack>
            <Pagination
              count={totalCount}
              color="secondary"
              onChange={onChange}
              defaultPage={pageIndex}
            />
          </Stack>
        </ThemeProvider>

        <div className="footer-text">
          <div>
            第 {(pageIndex - 1) * 20 + 1} – {pageIndex * 20} 个房源，共超过
            {totalCount * 20}个
          </div>
          <div className="color-text">包含额外附加费用及适用税费。</div>
        </div>
      </div>
    </SorterWrapper>
  )
})

EntireSorter.propTypes = {
  totalCount: PropTypes.number
}

export default EntireSorter
