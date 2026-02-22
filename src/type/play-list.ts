export interface PlayList {
  id: string;
  name: string;
  published: boolean;
  playlistTrack: PlaylistTrack[];
}

interface PlaylistTrack {
  id: string;
  songId: string;
  playlistId: string;
}
