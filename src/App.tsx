
import styled from "styled-components";
import OverviewBlock from "./Components/Blocks/OverviewBlock";
import FormBlock from "./Components/Blocks/FormBlock";



function App() {


  return (
    <APP>
      <Container>
        <OverviewBlock />
        <FormBlock />
      </Container>
    </APP>
  );
}

export default App;

const APP = styled.div`
min-height: 780px;
max-width: 1720px;
margin:101px auto;
`

const Container = styled("div")`
display:flex;

justify-content:center;
column-gap:60px;
row-gap:45px;

`
