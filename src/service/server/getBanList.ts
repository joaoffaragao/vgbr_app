import { IBan } from "./requestNewban";
import server from "./server";


export async function requestBanList(token: string): Promise<IBan[]> {
  const response = await server.get<IBan[]>(
    "ban",
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
  );

  return response.data;
}
