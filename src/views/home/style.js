import styled from 'styled-components'

export const HomeWrapper = styled.div`
  height: 200vh;
  .bgc {
    background: url(${require('@/asstes/img/home_banner.jpg')}) center/cover;
    height: 529px;
  }
  .main {
    width: 1032px;
    margin: 0 auto;
    padding: 0 24px;
  }
`
