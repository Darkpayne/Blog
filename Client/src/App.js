import Home from "./Pages/Home";
import {
  BrowserRouter,
  Route,
  Routes,  
} from "react-router-dom";
import SingleBlog from "./Pages/SingleBlog";
import AboutMe from "./Pages/AboutMe";


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/:id" element={ <SingleBlog />} />
          <Route path="/about" element={ <AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
