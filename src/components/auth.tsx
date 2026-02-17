import { getStatus } from "@/api/auth/status";
import useStore from "@/store/use-store";
import { useQuery } from "@tanstack/react-query";
import { useEffect, type ReactNode } from "react";

export default function Auth({ children }: { children: ReactNode }) {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  const { error, data } = useQuery({
    queryKey: ["status"],
    queryFn: () => getStatus(),
    retry: 0,
  });

  useEffect(() => {
    if (data) setUser(data);
  }, [data, setUser]);

  useEffect(() => {
    if (error) setUser(null);
  }, [error, setUser]);

  if (user !== undefined) return children;

  return <span>loading...</span>;
}
