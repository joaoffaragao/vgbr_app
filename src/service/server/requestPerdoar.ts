import server from "./server";

export async function requestPerdoar(
    banId: string,
    token: string
  ): Promise<void> {
     await server.delete(`http://localhost:3000/ban/${banId}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
  }
  