import styled from 'styled-components'

export const NotFoundWrapper = styled.div`
  background-color: ${(props) => props.theme.color.secondaryColor};
  color: #fff;
  .box {
    width: 200px;
    height: 200px;
    margin: 100px auto;
    box-shadow: 0px 0px 2px ${(props) => props.theme.color.secondaryColor};
    border-radius: 10px;
    transition: all 500ms ease;
    text-align: center;
    :hover {
      transform: translateY(-50px);
      box-shadow: 0px 0px 2px red;
      color: #000;
      cursor: pointer;
    }
  }
`
