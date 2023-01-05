import styled from 'styled-components'

export const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  box-shadow: 0 1px 2px #ddd;
  /* border-bottom: 1px solid #ddd; */
  color: ${(props) => props.theme.text.secondaryColor};
  font-size: 14px;
  font-weight: 600;

  /* position: fixed;
  top: 0;
  right: 0;
  left: 0;
  color: #fff; */
`
