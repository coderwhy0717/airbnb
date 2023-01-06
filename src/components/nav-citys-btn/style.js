import styled from 'styled-components'

export const NavcitysWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  .boxleft {
  }
  .icon {
    position: absolute;
    top: calc(62% - 28px);
    left: -8px;
    padding: 8px;
    box-shadow: 0 1px 1px 1px #ccc;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
  }
  .xuying {
    margin-top: -36px;
    position: absolute;
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
  .icon-right {
    position: absolute;
    top: calc(62% - 28px);
    right: -20px;
    padding: 8px;
    box-shadow: 0 1px 1px 1px #ccc;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
  }
  .xuanying-right {
    margin-top: -36px;

    position: absolute;
    right: -10px;
    height: 68px;
    width: 38px;
    background: linear-gradient(
      270deg,
      rgb(255, 255, 255) 0%,
      rgb(255, 255, 255) 17%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .content {
    display: flex;
    width: 100%;
    overflow: hidden;
    margin: 20px 0;
    padding: 14px 0;

    overflow-x: auto;

    ::-webkit-scrollbar {
      display: none;
    }

    .item {
      user-select: none;
      min-width: 120px;
      font-size: 17px;
      font-weight: 600;
      padding: 14px 0;
      cursor: pointer;
      /* box-shadow: 0 0 3px #ccc; */
      border: 1px solid #ccc;
      margin-right: 16px;
      border-radius: 3px;
      text-align: center;
      ${(props) => props.theme.mixin.boxShadow}
      &:last-child {
        margin-right: 68px;
      }
    }
    .cover {
      background-color: ${(props) => props.theme.color.secondaryColor};
      color: #fff;
    }
  }
`
