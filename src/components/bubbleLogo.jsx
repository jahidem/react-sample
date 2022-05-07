import { keyframes } from 'styled-components';
import styled from 'styled-components';
import galaxy from '../images/galaxy.png'
const anim = keyframes`
  0% { transform: rotate(0deg);
         }
  50%{
    transform: rotate(180deg);
  }
  100% { transform: rotate(360deg);
    }
`
const Container = styled.div`
  display: grid;
  height: 100px ;
  width: 100px;
  background-color: #e0e8f0;
  border-radius: 50%;
  align-content: center ;
  justify-content: center ;
  position: fixed;
  top: calc(50% - 50px);
  left: -50px;
  z-index: 3;
  animation: ${anim} 9s linear infinite;
`
const P = styled.p`
  color: royalblue;
`
function BubbleLogo({onPress}) {
  return ( <Container onClick={onPress}>
    <img src={galaxy} /> 
  </Container> );
}

export default BubbleLogo;