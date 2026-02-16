import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Login(){
 const [inputValue, setInputValue] = useState("");

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["login"],
    queryFn: () => findAllTodos(),
  });

  const { mutate } = useMutation({
    mutationFn: (data: TodoCreate) => createTodo(data),
    onSuccess: () => {
      setInputValue("");
      refetch();
    },
  });



}