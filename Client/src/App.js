import Home from "./Pages/Home";
import {
  BrowserRouter,
  Route,
  Routes,  
} from "react-router-dom";
import SingleBlog from "./Pages/SingleBlog";
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
import ViewCategory from "./Admin/Pages/ViewCategory";
import AddUser from "./Admin/Pages/AddUser";
import { useContext } from "react";
import { Context } from "./Context/Context";
import AddCategory from "./Admin/Pages/AddCategory";
import Profile from "./Pages/Profile";
import EditUser from "./Admin/Pages/EditUser";



function App() {
  const { user } = useContext(Context);

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/post/:id" element={ <SingleBlog />} />
          <Route path="/profile" element={ <Profile />} />
          <Route path="/login" element={ <Login/>} />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/joshua" element={ <Clifford />} />
          <Route path="/shop" element={user ? <Shop /> :  <Home />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/admin" element={user?.ROLES.includes(2002 || 2003) ?  <Admin user={user} /> :  <Home />} />
          <Route path="/admin/addpost" element={user?.ROLES.includes(2002 || 2003) ? <AddPost user={user}  />:  <Home />} />
          <Route path="/admin/editpost/:id" element={user?.ROLES.includes(2002 || 2003) ? <EditPost />:  <Home />} />
          <Route path="/admin/edituser/:id" element={user?.ROLES.includes(2002 || 2003) ? <EditUser />:  <Home />} />
          <Route path="/admin/viewpost" element={user?.ROLES.includes(2002 || 2003) ? <ViewPost />:  <Home />} />
          <Route path="/admin/viewusers" element={user?.ROLES.includes(2002 || 2003) ? <ViewUsers />:  <Home />} /> 
          <Route path="/admin/adduser" element={user?.ROLES.includes(2002 || 2003) ? <AddUser />:  <Home />} /> 
          <Route path="/admin/viewcategory" element={user?.ROLES.includes(2002 || 2003) ? <ViewCategory />:  <Home />} /> 
          <Route path="/admin/addcategory" element={user?.ROLES.includes(2002 || 2003) ? <AddCategory />:  <Home />} /> 
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
