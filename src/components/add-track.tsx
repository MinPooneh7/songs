import { addPlayList } from "@/api/playlist/add-track";

import { getPlayList } from "@/api/playlist/play-list";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CirclePlus } from "lucide-react";
import { useState } from "react";

export default function Add({ songId }: { songId: string }) {
    const [isOpen, setIsOpen] = useState(false);
  
  const { data } = useQuery({
    queryKey: ["playlist"],
    queryFn: () => getPlayList(),
  });

  const { mutate } = useMutation({
    mutationFn: (playlistId: string) => addPlayList(playlistId, songId),
    onSuccess: () => {setIsOpen(false)},
  });

  const handleAdd = (playListId: string) => {
    mutate(playListId);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <CirclePlus />
      </DialogTrigger>
      <DialogContent>
        {data?.playlists.map((playlist, index) => (
          <button key={index} onClick={() => handleAdd(playlist.id)}>
            {playlist.name}
          </button>
        ))}
      </DialogContent>
    </Dialog>
  );
}
