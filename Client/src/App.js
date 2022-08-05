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
import { useContext } from "react";
import { Context } from "./Context/Context";


function App() {
  const { user } = useContext(Context);
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/post/:id" element={ <SingleBlog />} />
          <Route path="/about" element={ <AboutMe />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/joshua" element={ <Clifford />} />
          <Route path="/shop" element={user ? <Shop /> : <Login/>} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/admin" element={user ?  <Admin user={user} /> : <Login/>} />
          <Route path="/admin/addpost" element={user ? <AddPost user={user}  />: <Login/>} />
          <Route path="/admin/editpost" element={user ? <EditPost />: <Login/>} />
          <Route path="/admin/viewpost" element={user ? <ViewPost />: <Login/>} />
          <Route path="/admin/viewusers" element={user ? <ViewUsers />: <Login/>} /> 
          <Route path="/admin/adduser" element={user ? <AddUser />: <Login/>} /> 
          <Route path="*" element={user ? <ErrorPage /> : <Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
