export interface IServerData {
  servers: IServer[];
}

export interface IServer {
  prefix: string;
  description: string;
  playerAmount: number;
  maxPlayers: number;
  inQue: number;
  serverInfo: string;
  url: string;
  mode: string;
  currentMap: string;
  ownerId: string;
  region: string;
  platform: string;
  smallMode: string;
  teams?: any;
  official: boolean;
  gameId: string;
}

export interface IRotation {
  rotation: IRotationMap[];
}

export interface IRotationMap {
  mapname: string;
  image: string;
  mode: string;
}
