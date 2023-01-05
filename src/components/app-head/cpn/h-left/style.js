import styled from 'styled-components'

export const HLeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 24px;
  /* color: var(--primaty-color); */
  color: ${(props) => props.theme.color.primaryColor};

  .logo {
    cursor: pointer;
  }
`
