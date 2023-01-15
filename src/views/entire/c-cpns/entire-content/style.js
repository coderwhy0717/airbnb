import styled from 'styled-components'

export const ContentWrapper = styled.div`
  padding: 25px 24px;

  .slides {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-left: -8px;
  }
  .top-img {
    display: inline-block;
    font-size: 14px;
    img {
      width: 40px;
      height: 40px;
    }
    .bold {
      font-weight: 600;
      margin: 0 3px 0 12px;
      color: ${(props) => props.theme.text.secondaryColor};
    }
  }
  .title {
    margin: 40px 0 22px;
    span {
      font-weight: 500;
      font-size: 0.9em;
    }
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    .infosss {
      position: relative;
      padding: 10px 8px;
    }
    .infos {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .cover {
      flex-shrink: 0;
      width: 20%;

      overflow: hidden;
      /*为了 指示器定位到中间 */
      display: flex;
      align-items: center;
      &:hover {
        cursor: pointer;
        .icon-left-box {
          display: flex;
        }
        .icon-right-box {
          display: flex;
        }
      }
      /* 底部虚影 */
      .bgcbot {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 20px;
        //
        box-shadow: 0 8px 20px 2px rgba(0, 0, 0, 1);
      }
      .icon-left-box {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        /*按钮 定位到中间 */
        /* display: none; */
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 999;
        .bgc {
          position: absolute;
          top: 0;
          left: 10px;
          bottom: 0;
          box-shadow: 0px 0 60px 17px rgba(0, 0, 0, 0.6);
          /* box-shadow: 10px 0 60px 17px red; */
          z-index: -1;
        }
        .icon-left {
          /* display: none; */
          margin-left: 15px;
          color: #fff;
          border-radius: 50%;
        }
      }

      .icon-right-box {
        display: none;
        align-items: center;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;

        z-index: 2;
        color: #fff;
        .bgc {
          position: absolute;
          top: 0;
          bottom: 0;
          /* right: 15px; */
          right: 0;
          /*  */
          box-shadow: 0px 0px 60px 17px rgba(0, 0, 0, 0.6);
          /* box-shadow: -10px 0 60px 17px red; */
          z-index: -1;
        }
        .icon-right {
          margin-right: 15px;
        }
      }
      //指示器
      .indicator-box {
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
        width: 120px;
        height: 24px;
        margin: 0 auto;
        overflow: hidden;
        display: flex;
        align-items: center;
        z-index: 1;
        .indicators {
          min-width: 20px;
          display: flex;
          justify-content: center;

          .indicator {
            flex-shrink: 0;
            margin: 0 auto;
            min-width: 6px;
            height: 6px;
            margin: 0 10px;
            border-radius: 50%;
            background-color: #fff;
            cursor: pointer;
            transition: all 200ms ease;
            &:hover {
              width: 8px;
              height: 8px;
            }
          }
        }
        .active {
          .indicator {
            width: 8px;
            height: 8px;
          }
        }
      }
      // 照片

      .box {
        position: relative;
        display: flex;
        width: 100%;
        /* css滚动 动画 */
        transition: transform 800ms ease;
        /* margin: 0 auto; */
        /* overflow: hidden; */

        .coverimg {
          flex-shrink: 0;
          width: 100%;
          img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
        }
      }
    }
  }
`
