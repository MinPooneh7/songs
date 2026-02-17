import { avatar } from "@/api/avatar";
import Profile from "@/assets/profile.jpg";
import useStore from "@/store/use-store";
import { useMutation } from "@tanstack/react-query";
import { Pencil } from "lucide-react";
import { useRef } from "react";

export default function SettingsAvatar() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  const { mutate } = useMutation({
    mutationFn: (file: File) => avatar(file),
    onSuccess: (data) => {
      setUser(data.user);
    },
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    mutate(e.target.files![0]);
  };

  const handleAvatarClick = () => {
    inputRef.current?.click();
  };

  return (
    <button onClick={handleAvatarClick} className="relative group">
      <img
        src={user?.avatar || Profile}
        className="border rounded-full w-50 h-50 group-hover:opacity-50"
      />
      <div className="hidden group-hover:flex absolute inset-0 w-full h-full justify-center items-center">
        <Pencil className="text-white" size={40} />
      </div>
      <input
        ref={inputRef}
        hidden
        type="file"
        accept=".jpg,.png"
        onChange={handleFileUpload}
      />
    </button>
  );
}
