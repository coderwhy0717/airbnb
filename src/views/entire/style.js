import styled from 'styled-components'

export const EntireWrapper = styled.div`
  position: relative;
  /* 没数据的时候显示100vh 又数据的时候 高度适应 */
  ${(props) => (props.showEntireLoading || !!props.show ? '' : 'height:100vh;')}
  .showEntireLoading {
    ${(props) =>
      props.showEntireLoading ? 'display: none;' : 'display: block;'}
    position: absolute;
    top: 53px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    line-height: 100vh;
    z-index: 999;

    .item {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin: 0 4px;
      border-radius: 50%;
      z-index: 999;
    }
    .item1 {
      /* 动画持续时间 匀速 运动次数(循环) alternate(往返运动)  1s(延迟)*/
      animation: am1 400ms linear infinite alternate 0ms;
      animation-timing-function: steps(3); /* 整个动画分3个画面(3帧) */
    }
    .item2 {
      animation: am1 400ms linear infinite alternate 200ms;
      animation-timing-function: steps(3); /* 整个动画分3个画面(3帧) */
    }
    .item3 {
      animation: am1 400ms linear infinite alternate 300ms;
      animation-timing-function: steps(3); /* 整个动画分3个画面(3帧) */
    }
  }
  @keyframes am1 {
    0% {
      /* 或者写成这样:  from {} */
      /* 多个属性相当于多组动画一起执行 */
      opacity: 0;
    }

    100% {
      /* 或者写成这样:  to {} */
      background: #008489;
    }
  }
`
