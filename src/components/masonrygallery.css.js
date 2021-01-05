import styled from 'styled-components'
import { device } from '../../device';

export const MasonryDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin: 0;
  // grid-gap: ${props => props.gap || `0em`};

  @media ${device.mobileL} {  
    margin:10% 10% 5% 10%;
  }
`

export const Col = styled.div`
  display: grid;
  // grid-gap: ${props => props.gap || `0em`};
  grid-auto-rows: max-content;
`