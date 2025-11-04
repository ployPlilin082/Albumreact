import { Routes } from "react-router-dom";
import AlbumRouts from "./AlbumRouts";
import CreateRouts from "./CreateRouts";

export default function AllController() {
  return (
    <Routes>
      {AlbumRouts}
      {CreateRouts}
    </Routes>
  );
}


 