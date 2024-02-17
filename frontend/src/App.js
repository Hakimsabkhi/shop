import { Container } from "react-bootstrap";
import Header from "./componnent/Header";
import Footer from "./componnent/Footer";


const App = () => {
  return (
    <>
      <Header/>
        <main>
          <Container>
            <h1>welcome</h1>
          </Container>
        </main>
        <Footer />
      
    </>
  );
};

export default App;
