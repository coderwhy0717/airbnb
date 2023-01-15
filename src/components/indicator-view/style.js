import styled from 'styled-components'

export const IndicatorWrapper = styled.div`
  position: relative;
  width: ${(props) => props.width}%;
  overflow: hidden;
  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 20px;

    transition: transform 250ms ease;

    > * {
      flex-shrink: 0;
    }
  }
`
