import styled from 'styled-components'

export const NotFoundWrapper = styled.div`
  /* canvasID */

  /* canvasID */
  background-color: ${(props) => props.theme.color.secondaryColor};
  color: #fff;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  transform: translateZ(20px);
  .boxss {
    width: 200px;
    height: 200px;
    margin: 100px auto;
    box-shadow: 0px 0px 2px ${(props) => props.theme.color.secondaryColor};
    border-radius: 10px;
    transition: all 500ms ease;
    text-align: center;
    display: flex;
    direction: rtl;
    &:hover {
      transition: all 1s ease;
      /* transform: rotate(20deg); */
      /* transform: matrix(0, 1, 1, 0, 0, 0); */
      transform: scale(1.1);
      background-color: #000;
    }
    /* offset-path: path('M0,0 L60,70 L-60,30z'); */
    :hover {
      /* transform: translateY(210px) scale(1.5); */
      box-shadow: 0px 0px 2px red;
      cursor: pointer;
      /* animation: loading 1s linear infinite; */
      /* background-color: linear-gradient(to right, red, blue); */
      /* line-height: 20px; */
      /* offset-distance: 80%; */
    }
    span {
      display: block;
    }
  }
  @keyframes loading {
    0% {
      transform: translateY(210px) scale(0.3);
      opacity: 0;
    }

    50% {
      transform: translateY(210px) scale(1);
      opacity: 1;
    }

    100% {
      transform: translateY(210px) scale(0.3);
      opacity: 0;
    }
  }
  .head {
    &:hover {
      transition: all 1s ease;
      transform: rotate(20deg);
    }
    ul {
      width: 200px;
      /* display: flex;
      flex-direction: row;
      justify-content: space-between; */

      display: grid;
      row-gap: 10px;
      column-gap: 10px;
      /* grid-template-columns: 95px 95px; */
      grid-template-columns: repeat(auto-fill, 1fr, 1fr);
      li {
        /* display: flex;
        flex-direction: column;
        flex-basis: 24%; */
        list-style: none;
        background-color: pink;
      }
      .li1 {
        height: 50px;
      }
    }
  }
`
