import styled from 'styled-components'

export const ContentWrapper = styled.div`
  font-size: 14px;

  .nav-btns {
    display: flex;

    .item-btns {
      span {
        display: inline-block;
        padding: 16px 0 13px;
        user-select: none;
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
  .active {
    color: #222;
    border-bottom: 3px solid #000;
  }
`
