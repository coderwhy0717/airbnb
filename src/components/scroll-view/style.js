import styled from 'styled-components'

export const ScrollWrapper = styled.div`
  position: relative;
  width: 1032px;
  margin: 18px 0 8px;

  .scroll {
    overflow: hidden;

    .conent {
      display: flex;
      margin: 0 auto;

      transition: transform 250ms ease;
    }
  }
  .boxbtn {
    position: absolute;
    display: flex;
    align-items: center;

    z-index: 99999;
    ${(props) => !props.showBgc && props.theme.mixin.position}
    ${(props) => !!props.shadow && props.theme.mixin.shadowPosition}
    height: 100%;
    .icon {
      position: absolute;
      z-index: 99;

      padding: 8px;
      box-shadow: 0 1px 1px 1px #ccc;
      border-radius: 50%;
      background-color: #fff;
      cursor: pointer;
      ${(props) => props.theme.mixin.boxShadow}
    }
  }
  .icon-left {
    left: -8px;
  }
  .icon-right {
    right: -8px;
  }
  .boxright {
    right: 0;
  }
  .xuying {
    height: 68px;
    width: 38px;
    background: linear-gradient(
      90deg,
      rgb(255, 255, 255) 0%,
      rgb(255, 255, 255) 17%,
      rgba(255, 255, 255, 0) 100%
    );
    /* background-color: red; */
  }
  .xuanying-right {
    height: 68px;
    width: 38px;
    background: linear-gradient(
      270deg,
      rgb(255, 255, 255) 0%,
      rgb(255, 255, 255) 17%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`
