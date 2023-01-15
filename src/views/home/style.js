import styled from 'styled-components'

export const HomeWrapper = styled.div`
  .bgc {
    background: url(${require('@/asstes/img/home_banner.jpg')}) center/cover;
    height: 529px;
  }
  .main {
    width: 1032px;
    margin: 0 auto;
    padding: 0 24px 120px;
  }
  .hosuecover-box {
    display: flex;
    flex-wrap: wrap;
    margin-left: -8px;
    flex-shrink: 0;
    line-height: 1.4;
  }
`
