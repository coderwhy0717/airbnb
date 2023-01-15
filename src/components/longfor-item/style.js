import styled from 'styled-components'

export const LongForItemWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 20%;

  .info {
    padding: 0 8px;
  }
  .boximg {
    position: relative;
    height: 100%;
    border-radius: 3px;

    img {
      /* width: 193.6px; */
      width: 100%;
      height: 100%;
      border-radius: 3px;
      cursor: pointer;
      object-fit: cover;
    }
  }
  .shadow {
    position: absolute;
    height: 60%;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 3%,
      rgb(0, 0, 0) 100%
    );
    opacity: 0.6;
    border-radius: 0 0 3px 3px;

    cursor: pointer;
  }
  .box-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 24px 32px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    user-select: none;
    .name {
      font-weight: 800;
      font-size: 18px;
      line-height: 1.5;
    }
    .price {
      font-size: 14px;
      font-weight: 600;
    }
  }
`
