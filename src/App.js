import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./components/Article";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Articles></Articles>}></Route>
          <Route path="/articles" element={<Articles></Articles>}></Route>
          <Route
            path="/topics/:topic_slug"
            element={<Articles></Articles>}
          ></Route>
          <Route
            path="/articles/:article_id"
            element={<Article></Article>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
