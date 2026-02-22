import { like } from "@/api/like/likes";
import { unlike } from "@/api/like/unlike";
import type { Song } from "@/type/artist";
import { useMutation } from "@tanstack/react-query";
import { Heart } from "lucide-react";

export default function Like({
  song,
  onSuccess,
}: {
  song: Song;
  onSuccess: () => void;
}) {
  const { mutate } = useMutation({
    mutationFn: () => (song.isLiked ? unlike(song.id) :like(song.id) ),
    onSuccess: () => {
      onSuccess();
    },
  });
  const handleLike = () => mutate();

  return (
    <button onClick={handleLike}>
      {song.isLiked ? (
        <Heart className={"text-red-500"} fill={"#fb2c36"} />
      ) : (
        <Heart className={"text-white"} />
      )}
    </button>
  );
}
