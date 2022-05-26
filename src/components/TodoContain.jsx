import styled from 'styled-components'
import Heading from './Heading'
import Todo from './Todo'
import NewTodo from './NewTodo'

const TodoContain=()=>{
  return(<Container>
        <Heading/>
        <Underline></Underline>

        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <NewTodo/>
  </Container>);
}
const Container = styled.div`
  margin: 0 auto;
  border: 2px solid #008000b4;
  display: grid;
  max-width: 800px;
  background-color: #749b992a;
  border-radius: 6px;
  padding: 1rem 2rem 2rem 2rem;
`;
const Underline= styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
  margin-bottom: 1rem;
`

export default TodoContain;