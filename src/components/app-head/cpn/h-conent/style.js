import styled from 'styled-components'

export const HConentWrapper = styled.div`
  .search {
    display: flex;
    align-items: center;
    line-height: 46px;
    cursor: pointer;
    width: 298px;
    height: 46px;
    border-radius: 150px;
    border: 1px solid #dddddd;
    box-shadow: 0 1px 3px #dddddd;
    ${(props) => props.theme.mixin.boxShadow}
    .text {
      flex: 1;
      margin-left: 24px;
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      background-color: ${(props) => props.theme.color.primaryColor};
      color: #fff;
      width: 32px;
      height: 32px;
      margin: 0 7px;
    }
  }
`
