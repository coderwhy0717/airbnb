import styled from 'styled-components'

export const NotFoundWrapper = styled.div`
  #vID {
    width: 250px;
    height: 250px;
  }
  img {
    width: 768px;
    height: 432px;
    object-fit: contain;
  }
  video::cue {
    background-color: transparent;
    color: yellow;
    font-size: 20px;
    text-shadow: peachpuff 0 1px;
  }

  video::cue(c.mn) {
    color: #fff;
    text-shadow: peachpuff 0 1px;
  }
  label {
    /* display: flex; */
    text {
    }
  }
`
