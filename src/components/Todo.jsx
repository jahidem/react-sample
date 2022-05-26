import styled from'styled-components'
const  Todo=()=> {
  return ( <Container>
    <P>

      lorem ipsum dolo emit sdsf dsgds wqr fdf
      lorem ipsum dolo emit sdsf dsgds wqr fdf
      lorem ipsum dolo emit sdsf dsgds wqr fdf
      lorem ipsum dolo emit sdsf dsgds wqr fdf
      lorem ipsum dolo emit sdsf dsgds wqr fdf. 
    </P>

  </Container> );
}
const Container= styled.div`
  min-height: 50px;
  background-color: white;
  margin: 0.7rem 0 ;
  border-radius: 6px;
  padding: 0 1rem;
  box-shadow: 2px 2px 5px #0000003a ;
  color: gray;

  &:hover{
    color: black ;
    cursor: pointer;
  }
`
const P= styled.p`
  font-size: 14px ;
`

export default Todo;