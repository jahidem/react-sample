import styled from 'styled-components'
import Heading from './Heading'

const TodoContain=()=>{
  return(<Container>
        <Heading/>
        <Underline></Underline>
  </Container>);
}
const Container = styled.div`
  margin: 0 auto;
  border: 2px solid green;
  display: grid;
  max-width: 800px;
  background-color: #d8d8d8af;
  border-radius: 6px;
  padding: 1rem 2rem 2rem 2rem;
`;
const Underline= styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`

export default TodoContain;