import styled from 'styled-components'

export const DetailWrapper = styled.div`
  .detail-box {
    display: ${(props) => (props.showDetail ? 'none' : '')};
  }
  .box {
    margin: 0 120px;
    padding: 0 80px;
    font-size: 14px;
    .nav-btns {
      display: flex;
      .item-btns {
        span {
          display: inline-block;
          padding: 16px 0 13px;
          :hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
        font-weight: 600;
        color: ${(props) => props.theme.color.secondaryColor};
        .dian {
          display: inline-block;
          margin: 0 9px;
          font-weight: 500;
          :hover {
            cursor: text;
            text-decoration: none;
          }
        }
      }
      .item-btns:last-child .dian {
        display: none;
      }
    }
  }
  .active {
    color: #222;
    border-bottom: 3px solid #000;
  }
  .lookimages {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #262626;
    z-index: 999999;
    span {
      position: absolute;
      top: 6px;
      right: 20px;
      font-size: 70px;
      font-weight: 100 !important;
      color: #fff;
      cursor: pointer;
    }

    .svg-icon {
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #fff;
    }
    .scroll-box {
      width: 100%;
      height: 70%;
      margin: 50px auto 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .imags {
        width: 50%;
      }
      .image-box　 {
        img {
          max-width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
          margin: 0 auto;
        }
      }
    }
    .info-box {
      margin: 0 auto;
      width: 50%;
      font-size: 14px;
      color: #fff;
      .info-title {
        margin: 20px 0;
      }
    }
  }
  .indicator {
    margin-top: 10px;
    height: 67px;
    margin-left: -8px;
    .indicator-box {
      position: relative;
      margin: 0 6px;
      cursor: pointer;
      img {
        width: 100px !important;
        height: 67px !important;
      }
      .bgc {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
        opacity: 1;
        transition: all 250ms ease;
      }
      .active {
        opacity: 0;
      }
    }
  }
`
