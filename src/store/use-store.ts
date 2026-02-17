import type { User } from "@/type/user";
import { create } from "zustand";

interface Store {
  user: User | undefined | null;
  setUser: (user: User | null) => void;
}

const useStore = create<Store>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
}));

export default useStore;
