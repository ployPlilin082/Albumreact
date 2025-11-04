import Navbar from "./component/navber";
import AllController from "./Controllers/AllController";
import Auth from "./auth/authcontext";

export default function App() {
  return (
    <Auth.Provider>
      <Navbar />
      <div className="container mt-4">
        <AllController />
      </div>
      

    </Auth.Provider>
  );
}

