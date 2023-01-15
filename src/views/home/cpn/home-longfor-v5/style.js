import styled from 'styled-components'

export const LongForWrapper = styled.div`
  .box-longfor {
    display: flex;
    width: 100%;
    margin-left: -8px;
  }
  .info-footer {
    margin-top: 35px;
    line-height: 1.5;
    color: ${(props) => props.theme.text.primaryColor};
    font-size: 16px;
    .imgbox {
      display: flex;
      align-items: center;

      img {
        height: 22px;
        margin-right: 5px;
      }
      span {
        margin-top: 5px;
        font-size: 18px;
        font-weight: 800;
      }
    }
    .info-text {
      margin-top: 6px;
    }
  }
  .label {
    font-weight: 600;
    font-size: 16px;
    margin-top: 14px;
    color: ${(props) => props.theme.color.secondaryColor};
    span:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
