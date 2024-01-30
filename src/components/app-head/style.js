import styled from 'styled-components'

export const HeadWrapper = styled.div`
  .head {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    height: 80px;
    box-shadow: 0 1px 2px #ddd;
    /* border-bottom: 1px solid #ddd; */
    color: ${(props) => props.theme.text.secondaryColor};
    font-size: 14px;
    font-weight: 600;
    transition: all 250ms ease;
    ${(props) => !props.isShow && `box-shadow: 0 0px 0px #fff;`}
    position: relative;
    background-color: #fff;
  }
  // 利用 z-index 原理
  .footer {
    position: absolute;
    top: -100px;
    width: 100%;
    height: 66px;
    padding-bottom: 34px;
    z-index: 99;
    background-color: #fff;

    ${(props) =>
      !props.isShow &&
      `transform: translateY(180px);
    `}
    transition: transform 250ms ease;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    .tab-item {
      position: relative;
      width: 850px;
      display: flex;
      align-items: center;
      border: 1px solid #ddd;
      border-radius: 50px;
      background-color: #f7f7f7;
      font-size: 13px;
      margin-top: 1px;
      .as {
        flex: 1;
        height: 100%;
        border-radius: 50px;
        transition: all 250ms ease;

        &:hover {
          cursor: pointer;
          background-color: #ebebeb;
        }
      }
      .city {
        padding-left: 32px;
      }

      .search {
        padding-left: 32px;
      }
    }
  }
  .muban {
    position: absolute;
    top: -2000px;

    ${(props) =>
      !props.isShow &&
      `background-color: rgba(0, 0, 0, .3);
      z-index: 66;
      transform: translateY(2180px);
      left: 0;
    right: 0;
    bottom: 0;
    `}
    transition: all 250ms ease;
  }
  .day {
    padding-left: 26px;
    padding-right: 15px;
  }

  .day::before {
    content: '';
    position: absolute;
    width: 0;
    height: 30px;
    top: calc(50% - 15px);
    left: calc(100% * 0.3 + 22px);
    border-left: 1px solid #dddddd;
    transform: scaleX(1);
    transition: transform 0.2s ease;
  }
  .day::after {
    content: '';
    position: absolute;
    width: 0;
    height: 30px;
    top: calc(50% - 15px);
    right: calc(100% * 0.3 + 23px);
    border-left: 1px solid #dddddd;
    transform: scaleX(1);
    transition: transform 0.2s ease;
  }
  .as:hover {
    &.day::before {
      display: none;
    }
    &.day::after {
      display: none;
    }
  }
  .activec {
    background-color: #fff;
    box-shadow: 0px 1px 10px 5px rgb(221, 221, 221, 1);
    padding: 1px 0;
    &.day::before {
      display: none;
    }
    &.day::after {
      display: none;
    }
    &.as:hover {
      background-color: #fff !important;
    }
  }
  /* position: fixed;
  top: 0;
  right: 0;
  left: 0;
  color: #fff; */
`
