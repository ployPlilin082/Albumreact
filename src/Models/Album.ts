import type { AlbumFile } from "./File";
import type { Song } from "./Song";
export interface Album {
  id: number
  name: string
  fileId: number
  description: string
  createBy: string
  createDate: string
  updateBy: string
  updateDate: string
  isDelete: boolean
  file?: AlbumFile
  songs?: Song[];
}

export interface AlbumCreate {
  name: string;
  description: string;
  coverPhotoUpload?: File;
  songNames: string[];
}
export {};
