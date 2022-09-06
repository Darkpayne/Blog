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
  console.log(user);
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
          <Route path="/shop" element={user ? <Shop /> : <Login/>} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/admin" element={user?.ROLES.includes(2002 || 2003) ?  <Admin user={user} /> : <Login/>} />
          <Route path="/admin/addpost" element={user?.ROLES.includes(2002 || 2003) ? <AddPost user={user}  />: <Login/>} />
          <Route path="/admin/editpost/:id" element={user?.ROLES.includes(2002 || 2003) ? <EditPost />: <Login/>} />
          <Route path="/admin/edituser/:id" element={user?.ROLES.includes(2002 || 2003) ? <EditUser />: <Login/>} />
          <Route path="/admin/viewpost" element={user?.ROLES.includes(2002 || 2003) ? <ViewPost />: <Login/>} />
          <Route path="/admin/viewusers" element={user?.ROLES.includes(2002 || 2003) ? <ViewUsers />: <Login/>} /> 
          <Route path="/admin/adduser" element={user?.ROLES.includes(2002 || 2003) ? <AddUser />: <Login/>} /> 
          <Route path="/admin/viewcategory" element={user?.ROLES.includes(2002 || 2003) ? <ViewCategory />: <Login/>} /> 
          <Route path="/admin/addcategory" element={user?.ROLES.includes(2002 || 2003) ? <AddCategory />: <Login/>} /> 
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
