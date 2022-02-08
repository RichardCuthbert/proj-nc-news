import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Articles></Articles>}></Route>
          <Route
            path="/topics/:topic_slug"
            element={<Articles></Articles>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
