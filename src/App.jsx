import Divider from "./Components/Divider";
import Header from "./Components/Header";
import Container from "./Components/Container";
import Main from "./Components/Main";
import Blogs from "./Components/Blogs";

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Divider />
      </Container>
      <Main>
        <Container>
          <Blogs />
        </Container>
      </Main>
    </>
  );
}

export default App;
