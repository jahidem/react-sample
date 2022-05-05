import styled from 'styled-components';
import { animated,useSpring } from 'react-spring';


const Container = styled(animated.div)`
  display: grid;
  height: 70px ;
  width: 70px;
  background-color: aliceblue;
  border-radius: 50%;
  align-content: center ;
  justify-content: center ;
  position: fixed;
  top: calc(50% - 35px);
  left: -50px;
  cursor: pointer;
`;
const P = styled.p`
  color: royalblue;
  font-size: 13px;
  font-weight: 600;
`;
const Bubble=({contain,x,y})=> {
  const ani = useSpring({
    from: {opacity:1,transform: `translate(${0}px,${0}px)`},
    to: {opacity: 1,transform: `translate(${x}px,${y}px)`},
    config: {duration: 600
       },
    delay: 0,
  });

  return ( <Container style={ani}>
      <P>{contain}</P>
  </Container> );
}

export default Bubble;