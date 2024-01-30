import styled from 'styled-components'

export const DetailWrapper = styled.div`
  .detail-box {
    display: ${(props) => (props.showDetail ? 'none' : '')};
    margin: 0 120px;
    padding: 0 80px;
    &::-webkit-scrollbar {
      display: none;
    }
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

  .itemdiv {
    height: 500px;
  }

  .contentTbas {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 200px;
    z-index: 99999;
    background-color: #fff;
    border-bottom: 0.5px solid #c7c7c7;
  }
  /* 价格区域 */
  /* .price-box {

  } */
  /* 内容 */
  .conent {
    display: flex;
    /* 全部滚动的节点包裹 */
    .box-conents {
      flex: 1.5;
      display: inline-block;
      .message {
        border-bottom: 1px solid #e7e7e7;
      }
    }

    /* 右边 选择 价格等 */
    .price {
      flex: 1;
      .price-box {
        position: sticky;
        top: 80px;
        z-index: 1;
        width: 100%;
        padding-right: 1px;
        .conentss {
          margin: 5px 10px 20px 62px;
          padding: 20px;
          border: 1px solid #e7e7e7;
          font-size: 12px;
          font-weight: 600;
          .price-info {
            border-bottom: 1px solid #e9e9e9;
            .q {
              span {
                font-weight: 900;
                font-size: 20px;
              }
            }
            .score {
              user-select: none;
              margin: 15px 0;
              cursor: pointer;
            }
          }
          .day {
            margin: 15px 0;
            .head {
            }
          }
          .btn {
            margin-top: 10px 0;
            background-color: #ff5a5f;
            text-align: center;
            height: 45px;
            line-height: 45px;
            border-radius: 5px;
            &:hover {
              cursor: pointer;
            }
            span {
              font-size: 16px;
              font-weight: 800;
              color: #fff;
            }
          }
          .tishi {
            text-align: center;
            margin: 10px 0 7px;
          }
        }
        .report {
          font-size: 14px;
          margin: 5px 10px 20px 62px;
          padding: 20px;
          text-align: center;
          margin-top: 28px;
          font-weight: 600;
          color: #717171;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
`
