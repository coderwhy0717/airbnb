import styled from 'styled-components'

export const NavWrapper = styled.div`
  display: flex;
  margin: 43px 0 0px;
  .title-box {
    display: flex;
    align-items: center;
    cursor: pointer;
    h2 {
      margin: 0;
      font-size: 22px;
    }
    &:hover {
      .rightArrow {
        opacity: ${(props) => props.label};
      }
    }
    .describe {
      margin: 20px 0;
    }
    .rightArrow {
      margin: 0 15px;
      opacity: 0;
      cursor: pointer;
      transition: opacity 250ms ease;
    }
  }
`
