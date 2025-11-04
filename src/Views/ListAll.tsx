import { useEffect, useState } from "react";
import { EventService } from "../service/eventService";
import { useNavigate } from "react-router-dom";
import type { Album } from "../Models/Album";
import "./ListAll.css";


export default function ListAll() {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const eventService = new EventService();

  const loadAlbums = (search = "") => {
    eventService
      .getAlbums(search)
      .then((res) => {
        if (res.code === "200" && Array.isArray(res.data)) {
          setAlbums(res.data);
        } else {
          console.error("Unexpected response:", res);
        }
      })
      .catch((err) => {
        console.error("Error loading albums:", err);
      });
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  const deleteAlbum = (id: number) => {
    if (!window.confirm("ต้องการลบอัลบั้มนี้ใช่ไหม?")) return;

    eventService
      .delete(id)
      .then((res) => {
        alert("ลบอัลบั้มสำเร็จ!");
        console.log(res);
        loadAlbums();
      })
      .catch((error) => {
        console.error("Error deleting album:", error);
        alert("เกิดข้อผิดพลาดในการลบอัลบั้ม");
      });
  };

  const filteredAlbums = albums.filter(
    (album) =>
      album.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      album.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="row">
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <button
          type="button"
          onClick={() => navigate("/create")}
          className="btn btn-outline-primary"
        >
          Create
        </button>

        <div className="input-group" style={{ width: "250px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search album..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={() => loadAlbums(searchTerm)}
          >
            <i className="bi bi-search"></i> Search
          </button>
        </div>
      </div>

      <div className="col-12">
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Cover Photo</th>
              <th>Description</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlbums.length > 0 ? (
              filteredAlbums.map((album, index) => (
                <tr key={album.id}>
                  <td>{index + 1}</td>
                  <td>{album.name}</td>
                  <td>
                    {album.file && (
                      <img
                        src={
                          album.file.filePath?.startsWith("http")
                            ? album.file.filePath
                            : `https://localhost:7188/uploads/${album.file.fileName}`
                        }
                        alt={album.name}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/default-placeholder.png";
                        }}
                      />
                    )}
                  </td>
                  <td>{album.description}</td>
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        className="btn btn-warning"
                        onClick={() => navigate(`/create?id=${album.id}`)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={() => deleteAlbum(album.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>No albums found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
