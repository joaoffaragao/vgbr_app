import axios from "axios";
import {
  IRotation,
  IRotationMap,
  IServerData,
} from "../provider/serverProvider/interface";
import { IUser } from "../provider/UserProvider/interface";

axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

export const api = axios.create({
  baseURL: "https://api.gametools.network/bfv/",
});
api.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
api.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";

export async function requisicaoBuscaDadosPlayer(player: string) {
  const data = await api
    .get<IUser>(
      `all/?format_values=true&name=${player}&platform=pc&skip_battlelog=false&lang=en-us`
    )
    .then((res) => res.data);

  return data;
}

export async function requisicaoBuscaDadosPlayerID(id: string) {
  const data = await api
    .get<IUser>(
      `https://api.gametools.network/bfv/stats/?format_values=true&playerid=${id}&platform=pc&skip_battlelog=false&lang=en-us`
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

export interface IServerCompleto {
  country: string;
  currentMap: string;
  currentMapImage: string;
  description?: string;
  gameId: string;
  inQueue: number;
  maxPlayerAmount: string;
  mode: string;
  official: false;
  owner: string;
  platform: string;
  playerAmount: 64;
  prefix: string;
  region: string;
  rotation: IRotationMap[];
  settings: object;
  smallmode: string;
  teams: object;
}

export interface IDataServidor {
  loading: [];
  que: object;
  serverinfo: object;
  update_timestamp: number;
  teams: Iteam[];
}

export interface Iteam {
  faction: string;
  image: string;
  key: string;
  name: string;
  players: IPlayerONServer[];
  shortName: string;
  teamid: string;
}

export interface IPlayerONServer {
  join_time: number;
  latency: number;
  name: string;
  platoon: string;
  player_id: number;
  rank: number;
  slot: number;
  user_id: number;
}
export async function requisicaoBuscaPalyersNoServidor() {
  const data = await api
    .get<IDataServidor>(`https://api.gametools.network/bfv/players/?name=vgbr`)
    .then((res) => res.data);
  return data.teams;
}

export async function requisicaoBuscaOProximoMapa() {
  const data = await api
    .get<IRotation>(
      `https://api.gametools.network/bfv/detailedserver/?name=vgbr&platform=pc&lang=en-us`
    )
    .then((res) => res.data);

  return data;
}

export interface IClan {
  canApplyToJoin: boolean;
  canJoinWithoutApply: boolean;
  currentSize: number;
  description?: string;
  emblem: string;
  id: string;
  members: IMember[];
  name: string;
  servers: [];
  tag: string;
}

export interface IMember {
  id: string;
  name: string;
  avatar: string;
}

export async function requisicaoListaDeMembros() {
  const data = await api
    .get<IClan>(
      "https://api.gametools.network/bfglobal/detailedplatoon/?id=c338def0-fd13-47a0-9be4-43199f3d6b5f&platform=pc&lang=en-us"
    )
    .then((res) => res.data);

  return data.members;
}
