import { Route } from "react-router-dom";
import Create from "../Views/Create";
import Login from "../Views/Login";
import Register from "../Views/register";
import ProtectedRoute from "../auth/ProtectedRoute";
import Sidebar from "../component/Sidebars";
import  Rounded from "../component/Rounded";
import Footer from "../component/Footer";
import Cardprofile from "../component/cardprofile";
import SearchForm from "../component/SearchForm";
import Cardlist from "../component/Cardlist1";


const CreateRouts = [

  <Route key="login" path="/login" element={<Login />} />,
  <Route key="register" path="/register" element={<Register />} />,
    <Route key="Sidebar" path="/Sidebar" element={<Sidebar />} />,
     <Route key="Rounded" path="/Rounded" element={<Rounded />} />,
   <Route key="Footer" path="/Footer" element={<Footer />} />,
   <Route key="cardprofile" path="/cardprofile" element={<Cardprofile />} />,
   <Route key="searchForm" path="/SearchForm" element={<SearchForm />} />,
   <Route key="Cardlist" path="/Cardlist" element={<Cardlist />} />,
   <Route element={<ProtectedRoute />}>
      <Route path="/Creat" element={< Create/>} />
    </Route>
];

export default CreateRouts;


