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
import Admin from "./Admin/Pages/Admin";
import AddPost from "./Admin/Pages/AddPost";
import EditPost from "./Admin/Pages/EditPost";
import ErrorPage from "./Pages/ErrorPage";
import ViewPost from "./Admin/Pages/ViewPost";
import ViewUsers from "./Admin/Pages/ViewUsers";
import AddUser from "./Admin/Pages/AddUser";


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
          <Route path="/admin" element={ <Admin />} />
          <Route path="/admin/addpost" element={ <AddPost />} />
          <Route path="/admin/editpost" element={ <EditPost />} />
          <Route path="/admin/viewpost" element={ <ViewPost />} />
          <Route path="/admin/viewusers" element={ <ViewUsers />} /> 
          <Route path="/admin/adduser" element={ <AddUser />} /> 
          <Route path="*" element={ <ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
