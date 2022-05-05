import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Container = styled(animated.div)`
    position: fixed ;
    background: #000;
    width: 100px;
    height: 250px;
  border-radius: 3px;
  border: 2px solid palevioletred;
  `;

const Card=()=> {
  const anim = useSpring({
    
    to: {left: 400,top: 300},
    from: {left: 200, top: 0},
    delay: 2000
  });

  return <Container style={anim}>jg</Container>;
}

export default Card;
