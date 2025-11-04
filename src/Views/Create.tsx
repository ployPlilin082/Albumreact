import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { EventService } from "../service/eventService";
import type { Album, AlbumCreate } from "../Models/Album";
import type { Song } from "../Models/Song";

export default function Create() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("id");
  const eventService = new EventService();

  const [album, setAlbum] = useState<AlbumCreate>({
    name: "",
    description: "",
    coverPhotoUpload: undefined,
    songNames: [],
  });

  const [isEdit, setIsEdit] = useState(false);
  const [oldCoverUrl, setOldCoverUrl] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      eventService
        .getById(Number(id))
        .then((res) => {
          const data: Album = res.data;
          setAlbum({
            name: data.name,
            description: data.description,
            coverPhotoUpload: undefined,
            songNames: data.songs ? data.songs.map((s: Song) => s.name) : [],
          });

          if (data.file && data.file.filePath) {
            setOldCoverUrl(`https://localhost:7188${data.file.filePath}`);
          }
        })
        .catch((err) => console.error("โหลดข้อมูลเก่าไม่สำเร็จ", err));
    }
  }, [id]);

const onFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    const newPreview = URL.createObjectURL(file);
    setPreviewUrl(newPreview);

    setAlbum((prev) => ({
      ...prev,
      coverPhotoUpload: file, 
    }));
  }
};


  const addSong = () => {
    setAlbum({ ...album, songNames: [...album.songNames, ""] });
  };

  const deleteSong = (index: number) => {
    const updated = album.songNames.filter((_, i) => i !== index);
    setAlbum({ ...album, songNames: updated });
  };

  const handleSongChange = (index: number, value: string) => {
    const updated = [...album.songNames];
    updated[index] = value;
    setAlbum({ ...album, songNames: updated });
  };

  const save = () => {
    if (isEdit && id) {
      eventService
        .edit(Number(id), album)
        .then(() => {
          alert("แก้ไขอัลบั้มสำเร็จ!");
          navigate("/list");
        })
        .catch((err) => {
          console.error("Error saving:", err);
          alert("เกิดข้อผิดพลาดในการบันทึก");
        });
    } else {
      eventService
        .create(album)
        .then(() => {
          alert("สร้างอัลบั้มใหม่สำเร็จ!");
          navigate("/list");
        })
        .catch((err) => {
          console.error("Error saving:", err);
          alert("เกิดข้อผิดพลาดในการบันทึก");
        });
    }
  };

  return (
    <div className="container mt-4">
      <h3>{isEdit ? "Edit Album" : "Create Album"}</h3>

      <div className="mb-3">
        <label>Name</label>
        <input
          className="form-control"
          value={album.name}
          onChange={(e) => setAlbum({ ...album, name: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label>Cover Photo</label>
        <input className="form-control" type="file" onChange={onFileSelected} />

        {(previewUrl || oldCoverUrl) && (
          <div className="mt-3 text-center">
            <p className="text-muted">
              {previewUrl ? "New Cover Preview:" : "Current Cover:"}
            </p>
            <img
              src={previewUrl || oldCoverUrl}
              alt="Old Cover"
              style={{ maxWidth: "200px", borderRadius: "10px" }}
            />
          </div>
        )}
      </div>

      <div className="mb-3">
        <label>Description</label>
        <textarea
          className="form-control"
          rows={3}
          value={album.description}
          onChange={(e) => setAlbum({ ...album, description: e.target.value })}
        ></textarea>
      </div>

      <button className="btn btn-primary mb-3" onClick={addSong}>
        เพิ่มเพลง
      </button>

      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>ชื่อเพลง</th>
            <th>จัดการ</th>
          </tr>
        </thead>
        <tbody>
          {album.songNames.map((title, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  placeholder="Song name"
                  onChange={(e) => handleSongChange(index, e.target.value)}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteSong(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-success" onClick={save}>
          {isEdit ? "Update" : "Save"}
        </button>
        <button className="btn btn-secondary" onClick={() => navigate("/list")}>
          Back
        </button>
      </div>
    </div>
  );
}
