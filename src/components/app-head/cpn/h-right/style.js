import styled from 'styled-components'

export const HRightWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 24px;
  height: 42px;
  line-height: 43px;
  .btns {
    display: flex;
    align-items: center;
    span {
      padding: 0 12px;

      border-radius: 22px;
      transition: background-color 250ms ease;
      &:last-child {
        padding: 12px;
      }
    }
    span:hover {
      background-color: #f7f7f7;
      cursor: pointer;
    }
  }
  .info {
    display: flex;
    align-items: center;
    padding: 5px;
    margin-left: 7px;
    cursor: pointer;
    border-radius: 22px;
    border: 1px solid #ddd;
    ${(props) => props.theme.mixin.boxShadow}
    ${(props) => (props.isshow ? props.theme.mixin.showShadow : '')};
    .menu {
      margin: 0 12px 0 8px;
    }
    .avatar {
      color: #717171;
    }
  }
  .info-btns {
    position: absolute;
    top: 52px;
    width: 240px;
    border-radius: 10px;
    padding: 8px 0;
    background-color: #fff;
    box-shadow: 0px 0px 3px #ccc;
    font-weight: 500;
    z-index: 9999;
    .login {
      border-bottom: 1px solid #ccc;
      padding-bottom: 8px;
      margin-bottom: 8px;
      .item:first-of-type {
        font-weight: 600;
      }
    }

    .item {
      height: 42px;
      line-height: 42px;
      padding-left: 15px;
      transition: background-color 250ms ease;
      &:hover {
        background-color: #f7f7f7;
        cursor: pointer;
      }
    }
  }
`
