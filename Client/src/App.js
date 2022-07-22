import Home from "./Pages/Home";
import {
  BrowserRouter,
  Route,
  Routes,  
} from "react-router-dom";
import SingleBlog from "./Pages/SingleBlog";
import AboutMe from "./Pages/AboutMe";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Clifford from "./Components/Clifford";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/:id" element={ <SingleBlog />} />
          <Route path="/about" element={ <AboutMe />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/joshua" element={ <Clifford />} />
          <Route path="/shop" element={ <Shop />} />
          <Route path="/contact" element={ <Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
