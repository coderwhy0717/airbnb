import styled from 'styled-components'

export const ImageViewWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 60vh;
  :hover {
    /* 移动到了区域 显示 所有的背景 变化鼠标 手指*/
    .cover-bgc {
      opacity: 1;
    }
  }
  /* 定好 背景 */
  .cover-bgc {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0, 0.3);
    opacity: 0;
    transition: all 0.6s ease;
  }
  .imgleft {
    flex: 1;
    position: relative;
    width: 100%;
    height: calc(100% - 2px);
    min-height: 200px;
    border: 1px solid #000;
    transition: all 0.6s ease;
    overflow: hidden;
    /* 鼠标到了 取消背景 */
    :hover {
      .cover-bgc {
        opacity: 0;
        display: none;
      }
    }
    img {
      width: 100%;
      height: 100%;
      transition: all 450ms ease;
      :hover {
        cursor: pointer;
        transform: scale(1.05);
      }
    }
  }

  .imgboxright {
    flex: 1;
    width: 100%;
    height: calc(100% - 3px); // 60vh
    display: flex;
    flex-wrap: wrap;
    transition: all 250ms ease;
    .boximgs {
      position: relative;
      width: calc(50% - 2px);
      height: calc(50%);
      min-height: 99px;
      border: 1px solid #000;
      overflow: hidden;
      /*右边的imgs 取消背景  */
      :hover {
        .cover-bgc {
          opacity: 0;
          display: none;
        }
      }
      img {
        width: 100%;
        height: 100%;
        transition: all 250ms ease;
        :hover {
          cursor: pointer;
          transform: scale(1.05);
        }
      }
    }
  }
  .icon-item {
    position: absolute;

    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 7px 15px;
    border: 1px solid #000;
    border-radius: 8px;
    span {
      padding-left: 8px;
    }
    :hover {
      cursor: pointer;
      background-color: #f7f7f7;
      .cover-bgc {
        opacity: 0;
      }
    }
  }
  .icon-share {
    top: 24px;
    right: 127px;
  }
  .icon-love {
    top: 24px;
    right: 23px;
  }
  .look-image {
    right: 24px;
    bottom: 24px;
    border: none;
    line-height: 22px;
    padding: 7px 15px;
    border-radius: 5px;
    span {
      padding-left: 0;
    }
  }
`
