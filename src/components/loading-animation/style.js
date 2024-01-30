import styled from 'styled-components'

export const LoadingAnimationWarpper = styled.div`
  position: absolute;
  top: 53px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  height: auto;
  z-index: 9999999;
  /* 滚动粘着顶部 固定 相当于 fixed */
  .masking {
    position: sticky;
    top: 50%;
  }
  .load {
    display: inline-block;
    width: 12px;
    height: 12px;
    background: #008489;
    margin: 0 4px;
    border-radius: 50%;
    animation: loading 1s linear infinite;
  }
  .two {
    animation-delay: 0.2s;
  }
  .three {
    animation-delay: 0.4s;
  }
  @keyframes loading {
    0% {
      transform: scale(0.3);
      opacity: 0;
    }

    50% {
      transform: scale(1);
      opacity: 1;
    }

    100% {
      transform: scale(0.3);
      opacity: 0;
    }
  }
`
