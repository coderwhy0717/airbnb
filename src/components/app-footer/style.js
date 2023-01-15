import styled from 'styled-components'

export const FooterWrapper = styled.div`
  border-top: 0.5px solid #e7e7e7;
  .airbnbfooter {
    width: 1032px;
    margin: 0 auto;
    font-size: 14px;

    font-weight: 800;
    color: #767676;
    padding: 30px 0 50px;
  }
  .footer-top {
    display: flex;

    border-bottom: 0.5px solid #e7e7e7;
    width: 1032px;
    margin: 0 auto;
    padding: 48px 24px 24px;
    .item {
      width: 262px;
      padding: 0 8px;
      margin-left: -8px;

      font-size: 14px;
      box-sizing: border-box;
      .title {
        font-weight: 800;
        margin-bottom: 15px;
        color: ${(props) => props.theme.text.secondaryColor};
      }
      .names {
        margin-bottom: 4px;
        font-weight: 600;
        color: #767676;
        line-height: 1.3;
        span:hover {
          cursor: pointer;
          text-decoration: underline;
        }
        .spana {
          background-color: ${(props) => props.theme.color.secondaryColor};
          color: #fff;
          padding: 1px 4px;
          font-size: 12px;
          font-weight: 600;
          border-radius: 3px;
          margin-left: 5px;
          cursor: text;
        }
      }
    }
  }
`
