import styled from 'styled-components'

export const HouseCoverWrapper = styled.div`
  width: 25%;
  box-sizing: border-box;
  padding: 8px;
  margin: 8px 0;
  color: ${(props) => props.theme.text.primaryColor};
  .box-img {
    position: relative;
    padding: 66.66% 8px 0;
    box-sizing: border-box;
    cursor: pointer;
    overflow: hidden;
    border-radius: 3px;

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
    line-height: 1.6;
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
`
