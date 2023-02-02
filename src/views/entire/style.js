import styled from 'styled-components'

export const EntireWrapper = styled.div`
  position: relative;
  /* 没数据的时候显示100vh 又数据的时候 高度适应 */
  ${(props) => (props.showEntireLoading || !!props.show ? '' : 'height:100vh;')}
`
