import { ISession } from "../../pages/login";
import server from "./server";

export interface IResponseLogin {
  token: string;
}

export async function requestLogin(data: ISession): Promise<string> {
  const response = await server.post<IResponseLogin>(
    "http://localhost:3000/login",
    data
  );

  return response.data.token;
}
