import styled from 'styled-components'

export const FooterLabelWrapper = styled.div`
  display: flex;
  align-items: center;

  line-height: 1.4;
  color: ${(props) =>
    props.name
      ? props.theme.color.secondaryColor
      : props.theme.text.secondaryColor};
  .title {
    font-size: 17px;
    font-weight: 600;

    margin-right: 5px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
