import { ISession } from "../pages/login";
import { api } from "./api";

export interface IResponseLogin {
  token: string;
}

export async function requestLogin(data: ISession): Promise<string> {
  const response = await api.post<IResponseLogin>("/login", data);

  return response.data.token;
}
