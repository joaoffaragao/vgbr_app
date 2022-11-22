import { INewBanRequest } from "../../components/modais/novoBan";
import server from "./server";

export interface IResponseLogin {
  token: string;
}

export interface IBan {
  id: string;
  playerId: string;
  punicao: number;
  motivo: string;
  created?: Date | string;
  updated?: Date | string;
  bandio: boolean;
}

export async function requestNewban(
  data: INewBanRequest,
  token: string
): Promise<IBan> {
  const response = await server.post<IBan>("http://localhost:3000/ban", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
