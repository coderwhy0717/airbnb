import styled from 'styled-components'

export const HConentWrapper = styled.div`
  user-select: none;
  .search {
    ${(props) => (props.isShow ? 'display: flex;' : 'display: none;')}

    align-items: center;
    line-height: 46px;
    cursor: pointer;
    width: 298px;
    height: 46px;
    border-radius: 150px;
    border: 1px solid #dddddd;
    box-shadow: 0 1px 3px #dddddd;
    ${(props) => props.theme.mixin.boxShadow}
    transition: all 2s ease;
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
  .box-b {
    display: flex;
    position: relative;
  }
  .box {
    ${(props) => {
      if (props.isShow) {
        //true 不显示
        return `
        position: absolute;
        top:17px;
        x-index:99999999;
        margin-left: 70px;
        transform: translateY(-100px) scale(0.5);

        `
      }
    }}

    transition: transform 250ms ease;
    font-size: 16px;
    font-weight: 400;
    height: 46px;
    line-height: 46px;
    z-index: 99999;

    .aaa {
      ${(props) => (props.isShow ? 'display:none;' : '')}
      position: absolute;
      left: 0;
      right: 0;
      margin-top: 20px;
      z-index: 9;
      text-align: center;
      background-color: #fff;
      /* transition: all 250ms ease; */
    }
    .b-box {
      position: relative;
      height: 41px;
      cursor: pointer;
      color: #000;

      &:last-child {
        margin-left: 32px;
      }
    }
    /*元素  画线 */
    .b-box::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      top: 41px;
      left: 0;
      background-color: #000;
      transform: scaleX(0);
      transition: transform 0.2s ease;
    }

    .b-box:hover::before {
      transform: scaleX(1) !important;
      background-color: #707070;
    }
    .b-box:hover {
      color: #707070;
    }
    /* 活跃的hover覆盖掉 */
    .active:hover::before {
      background-color: #000;
      transform: scaleX(1);
    }
    .active:hover {
      color: #000;
    }
    .active::before {
      background-color: #000;
      transform: scaleX(1);
    }
  }
  /* @keyframes trans {
    from {
      transform: translate(0, -20px) scale(0.5);
    }
    to {
      transform: translate(0, -300px) scale(0.2);
    }
  } */
`
