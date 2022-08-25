import axios from "axios";
import { IServerData } from "../provider/serverProvider/interface";
import { IUser } from "../provider/UserProvider/interface";

axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

export const api = axios.create({
  baseURL: "https://api.gametools.network/bfv/",
});
api.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
// api.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";

export async function requisicaoBuscaDadosPlayer(player: string) {
  const data = await api
    .get<IUser>(
      `all/?format_values=true&name=${player}&platform=pc&skip_battlelog=false&lang=en-us`
    )
    .then((res) => res.data);

  return data;
}

export async function requisicaoBuscaDadosServer() {
  const data = await api
    .get<IServerData>(
      `https://api.gametools.network/bfv/servers/?name=vgbr&region=all&platform=pc&limit=10&lang=en-us`
    )
    .then((res) => res.data);

  return data;
}

export interface IRotation {
  rotation: IRotationMap[];
}

export interface IRotationMap {
  mapname: string;
  image: string;
  mode: string;
}

export async function requisicaoBuscaOProximoMapa() {
  const data = await api
    .get<IRotation>(
      `https://api.gametools.network/bfv/detailedserver/?name=vgbr&platform=pc&lang=en-us`
    )
    .then((res) => res.data);

  return data.rotation[0];
}
