import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.tracker.gg/api/v2/bfv/standard",
});

export interface IplayerData {
  data: IUser;
}

export interface IUser {
  platformInfo: IPlatformInfo;
  userInfo: object;
  metadata: object;
  segments: ISegment[];
  expiryDate: string;
  availableSegments: object[];
}
export interface IPlatformInfo {
  additionalParameters?: any;
  avatarUrl: string;
  platformSlug: string;
  platformUserHandle: string;
  platformUserId?: any;
  platformUserIdentifier: string;
}

export interface ISegment {
  attributes: object;
  expiryDate?: string;
  metadata: object;
  stats: IStats;
  type: string;
}

export interface IStats {
  aceSquad: IStatsCategory;
  assists: IStatsCategory;
  assistsAsKills: IStatsCategory;
  avengerKills: IStatsCategory;
  damage: IStatsCategory;
  damagePerMinute: IStatsCategory;
  deaths: IStatsCategory;
  dogtagsTaken: IStatsCategory;
  draws: IStatsCategory;
  headshots: IStatsCategory;
  heals: IStatsCategory;
  kdRatio: IStatsCategory;
  killStreak: IStatsCategory;
  kills: IStatsCategory;
  killsAggregated: IStatsCategory;
  killsPerMinute: IStatsCategory;
  longestHeadshot: IStatsCategory;
  losses: IStatsCategory;
  ordersCompleted: IStatsCategory;
  rankProgression: IStatsCategory;
  rankScore: IStatsCategory;
  repairs: IStatsCategory;
  resupplies: IStatsCategory;
  revives: IStatsCategory;
  revivesRecieved: IStatsCategory;
  rounds: IStatsCategory;
  roundsPlayed: IStatsCategory;
  saviorKills: IStatsCategory;
  scoreAir: IStatsCategory;
  scoreAssault: IStatsCategory;
  scoreAward: IStatsCategory;
  scoreBonus: IStatsCategory;
  scoreCombat: IStatsCategory;
  scoreDefensive: IStatsCategory;
  scoreLand: IStatsCategory;
  scoreMedic: IStatsCategory;
  scoreObjective: IStatsCategory;
  scorePerMinute: IStatsCategory;
  scoreRecon: IStatsCategory;
  scoreRound: IStatsCategory;
  scoreSquad: IStatsCategory;
  scoreSupport: IStatsCategory;
  scoreTanks: IStatsCategory;
  scoreTransports: IStatsCategory;
  shotsAccuracy: IStatsCategory;
  shotsHit: IStatsCategory;
  shotsTaken: IStatsCategory;
  squadWipes: IStatsCategory;
  suppressionAssists: IStatsCategory;
  timePlayed: IStatsCategory;
  wins: IStatsCategory;
  wlPercentage: IStatsCategory;
  squadSpawns: IStatsCategory;
  rank: IStatsCategory;
  scoreGeneral: IStatsCategory;
}

export interface IStatsCategory {
  category: string;
  displayCategory: string;
  displayName: string;
  displayType: string;
  displayValue: string;
  metadata?: object;
  percentile?: any;
  rank?: any;
  value: number;
}

export async function requisicaoBuscaDadosPlayer(
  plataforma: string,
  player: string
) {
  return await api
    .get<IplayerData>(`profile/${plataforma}/${player}`)
    .then((res) => res.data.data);
}
