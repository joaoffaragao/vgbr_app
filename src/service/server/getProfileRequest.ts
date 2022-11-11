import { IAdm } from "../../provider/admProvider";
import server from "./server";

async function getProfileRequest(TokenArmazeado: string): Promise<IAdm> {
  const response = await server.get<IAdm>("/user/profile", {
    headers: {
      Authorization: `Bearer ${TokenArmazeado}`,
    },
  });

  return response.data;
}

export default getProfileRequest;
