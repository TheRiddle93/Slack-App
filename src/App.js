import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// . means current directory, then / for other directories/folders inside the current directory, then / the file you wish to import.
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar />
            <Switch>
              <Route path="/room">
                <Chat />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 30px auto;
`;

const Main = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 260px auto;
`;

export default App;

// index.js imports the code in app.js. and linkes it to html, by getElementById('root'). So everything that is made in react is linked to the index html through div id 'root'
