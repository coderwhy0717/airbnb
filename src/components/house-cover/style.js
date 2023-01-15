import styled from 'styled-components'

export const HouseCoverWrapper = styled.div`
  width: ${(props) => props.width};
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 8px;
  margin: 8px 0;
  color: ${(props) => props.theme.text.primaryColor};
  .slide {
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    .indicator-position {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 2px;
      width: 100%;
    }
    .bgc-box {
      height: 20px;
    }
    .indicator-view {
      display: flex;
      justify-content: center;
      z-index: 1;
    }
    .indicator-bgc {
      overflow: hidden;
      /* rgba(0, 0, 0, 0.6) */
      box-shadow: 0 18px 10px 16px rgba(0, 0, 0, 0.1);
    }
    &:hover {
      .icon-box {
        display: flex;
        cursor: pointer;
      }
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
    .icon-box {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 20%;
      /*按钮 定位到中间 */
      display: none;
      align-items: center;
      z-index: 2;
      color: #fff;
      .bgc {
        position: absolute;
        top: 0;
        left: 10px;
        bottom: 0;
        //rgba(0, 0, 0, 0.6)
        box-shadow: 10px 10px 60px 17px rgba(0, 0, 0, 0.6);
        z-index: -1;
      }
      .icon-right {
        box-shadow: 25px 0px 60px 17px rgba(0, 0, 0, 0.6);
      }
      .icon {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }
  }

  .box-img {
    position: relative;
    padding: 66.66% 8px 0;
    box-sizing: border-box;
    cursor: pointer;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .message {
    font-size: 12px;
    font-weight: 600;
    margin-top: 8px;
    color: ${(props) => props.verifyColor};
    cursor: pointer;
    .filled {
      display: inline-block;
      padding: 1px 4px;
      margin: 0 5px 5px 0;
      border-radius: 3px;
      font-size: 12px;
      font-weight: 800;
      color: #fff;
      background-color: ${(props) => props.verifyColor};
    }
  }
  .house-name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 16px;
    font-weight: 800;
    color: #484848;
    cursor: pointer;
  }
  .price {
    font-size: 14px;
    font-weight: 400;
    margin: 5px 0 2px;
  }

  .reviews {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 1.6;
    .MuiRating-icon {
      margin-right: -2px;
    }
    .reviews-count {
      margin-left: 3px;
      font-weight: 600;
    }
    .score {
      font-weight: 600;
    }
  }
  /* 指示器 */
  .indicators-box {
    /* min-width: 16px; */
    width: calc(100% / 7);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .indicators {
    flex-shrink: 0;
    width: calc(100% / 2.5);
    height: calc(100% / 3);
    border-radius: 50%;
    background-color: #e4dcd6;
    cursor: pointer;
    transition: all 200ms ease;
    overflow: hidden;
    &:hover {
      width: calc(100% / 2);
      height: calc(100% / 2.5);
      background-color: #fff;
    }
  }
  .active {
    width: calc(100% / 2);
    height: calc(100% / 2.5);
    background-color: #fff;
    /* width: 8px !important;
    height: 8px !important; */
  }
  /* -1 */
  .index3 {
    width: calc(100% / 3.5);
    height: calc(100% / 5.5);
  }
  .index2 {
    width: calc(100% / 3);
    height: calc(100% / 4.5);
  }
  .index1 {
    width: calc(100% / 2.5);
    height: calc(100% / 3.5);
  }
  /* +1 */
  .index5 {
    width: calc(100% / 2.5);
    height: calc(100% / 3.5);
  }
  .index6 {
    width: calc(100% / 3);
    height: calc(100% / 4.5);
  }
  .index7 {
    width: calc(100% / 3.5);
    height: calc(100% / 5.5);
  }
`
