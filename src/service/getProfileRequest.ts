import { IAdm } from "../provider/admProvider";
import { api } from "./api";

async function getProfileRequest(TokenArmazeado: string): Promise<IAdm> {
  const response = await api.get<IAdm>("/profile", {
    headers: {
      Authorization: `Bearer ${TokenArmazeado}`,
    },
  });

  return response.data;
}

export default getProfileRequest;
