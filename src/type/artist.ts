export interface Artist {
  id: string;
  name: string;
  originCountry: string;
  activeYears: string;
  shortBio: string;
  description: string;
  imageUrl: string;
  heroColor: string;
  createdAt: Date;
  updatedAt: Date;
  songs: Song[];
}

export interface Song {
  id: string;
  artistId: string;
  title: string;
  releaseYear: number;
  album: string;
  durationSec: number;
  coverUrl: string;
  previewUrl: string;
  createdAt: Date;
  updatedAt: Date;
  artist: Artist;
  prevSongId: string | null;
  nextSongId: string | null;
  isLiked?: boolean;
}

export interface Like {
  id: string;
  song: Song;
}
