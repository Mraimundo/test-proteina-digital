import { useQuery } from "react-query";
import { api } from "../api";

type Repos = {
  id: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
    url: string;
  };
};

export async function getRepos(): Promise<Repos[]> {
  const { data } = await api.get("repositories");

  return data;
}

export function useRepos() {
  return useQuery("repos", getRepos, {
    staleTime: 1000 * 5, // 5 segundos
  });
}
