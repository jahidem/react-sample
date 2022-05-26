import styled from 'styled-components'
const Heading = () =>{
  return(
    <Container>
      <Tittle>
      <P>Todos</P>
      <Badge>7</Badge>
      </Tittle>

      <Button>Add</Button>
    </Container>
  );
}


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between ;
  align-items: center;
`;


const P = styled.p`
    font-size: 18px;
    font-weight: bolder;
    color: black;
    margin: 0.7rem 0;
`;
const Button = styled.button`
    border: none;
    justify-self: flex-end;
    height:  35px;
    width: 60px;
    font-size: 15px;
    color: white;
    background-color: green;
    border-radius: 4px;
    cursor: pointer;

`;
const Badge = styled.div`
  display: grid;
  align-content: space-around ;
  text-align: center ;
  width: 10px;
  height: 16px;
  color: black;
  font-size: 12px;
  font-weight: bolder;
  background-color: orange;
  border-radius: 50% 50% 98% 98%;
  padding: 3px 6px;
  

`;
const Tittle = styled.div`
  display: flex;
  text-align: center;
`

export default Heading;