import styled from 'styled-components'

export const CitysBtnWrapper = styled.div`
  position: relative;
  display: flex;
  .item {
    user-select: none; //不能被选中文字
    font-size: 17px;
    font-weight: 600;
    padding: 14px 16px;
    cursor: pointer;
    /* box-shadow: 0 0 3px #ccc; */
    border: 1px solid #ccc;
    margin-right: 16px;
    border-radius: 3px;
    text-align: center;
    ${(props) => props.theme.mixin.boxShadow}
    span {
      white-space: nowrap;
      display: inline-block;
      min-width: 88px;
    }
  }
  .active {
    background-color: ${(props) => props.theme.color.secondaryColor};
    color: #fff;
  }
`
