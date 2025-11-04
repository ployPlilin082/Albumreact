import axios from "axios";
import type { Album, AlbumCreate } from "../Models/Album";
import { User } from "../Models/User";

export interface IAPIResponse<T> {
    code: string;
    message: string;
    data: T;
}

export class EventService {
    private baseUrl = "https://localhost:7188/api/Album";
     private storageKey = "registeredUsers";

    getAlbums(search?: string): Promise<IAPIResponse<Album[]>> {
        let url = `${this.baseUrl}/GetAlbums`;
        if (search && search.trim() !== "") {
            url += `?search=${encodeURIComponent(search)}`;
        }

        return axios.get<IAPIResponse<Album[]>>(url)
            .then(response => response.data);
    }

    getById(id: number): Promise<IAPIResponse<Album>> {
        return axios.get<IAPIResponse<Album>>(`${this.baseUrl}/GetAlbumById/${id}`)
            .then(response => response.data);
    }

    create(album: AlbumCreate): Promise<IAPIResponse<Album>> {
        const formData = new FormData();
        formData.append("Name", album.name);
        formData.append("Description", album.description);

        if (album.coverPhotoUpload) {
            formData.append("CoverPhotoUpload", album.coverPhotoUpload);
        }

        for (let i = 0; i < album.songNames.length; i++) {
            formData.append(`SongNames[${i}]`, album.songNames[i]);
        }

        return axios.post<IAPIResponse<Album>>(
            `${this.baseUrl}/Create`,
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
        ).then(response => response.data);
    }

    edit(id: number, album: AlbumCreate): Promise<IAPIResponse<Album>> {
        const formData = new FormData();
        formData.append("Name", album.name);
        formData.append("Description", album.description);

        if (album.coverPhotoUpload) {
            formData.append("CoverPhotoUpload", album.coverPhotoUpload);
        }

        for (let i = 0; i < album.songNames.length; i++) {
            formData.append(`SongNames[${i}]`, album.songNames[i]);
        }

        return axios.put<IAPIResponse<Album>>(
            `${this.baseUrl}/Edit/${id}`,
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
        ).then(response => response.data);
    }

    delete(id: number): Promise<IAPIResponse<Album>> {
        return axios.delete<IAPIResponse<Album>>(`${this.baseUrl}/Delete/${id}`)
            .then(response => response.data);
    }
    registerUser(user: User): IAPIResponse<User> {
  const users = JSON.parse(localStorage.getItem(this.storageKey) || "[]");

  const existingUser = users.find(
    (u: User) => u.Email === user.Email || u.ContactNo === user.ContactNo
  );

  if (existingUser) {
    return { code: "400", message: "User already exists", data: user };
  }

  user.UserId = users.length + 1;
  users.push(user);
  localStorage.setItem(this.storageKey, JSON.stringify(users));

  return { code: "200", message: "Registration successful", data: user };
}

loginUser(loginData: { ContactNo: string; Password: string }): IAPIResponse<User> {
  const users = JSON.parse(localStorage.getItem(this.storageKey) || "[]");

  const foundUser = users.find(
    (u: User) =>
      (u.Email === loginData.ContactNo || u.ContactNo === loginData.ContactNo) &&
      u.Password === loginData.Password
  );

  if (!foundUser) {
    return { code: "401", message: "Invalid credentials", data: {} as User };
  }

  return { code: "200", message: "Login success", data: foundUser };
}

    
}
