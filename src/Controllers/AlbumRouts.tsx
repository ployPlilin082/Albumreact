import { Route } from "react-router-dom";
import ListAll from "../Views/ListAll";
import ProtectedRoute from "../auth/ProtectedRoute";

const AlbumRouts = [
  <Route
    key="list"
    element={<ProtectedRoute timeout={10000} />}
  >
    <Route path="/list" element={<ListAll />} />
  </Route>
];

export default AlbumRouts;

