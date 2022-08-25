export interface IplayerData {
  data: IUser;
}

export interface IUser extends Array<string | number> {
  accuracy: string;
  activePlatoon: object;
  avatar: string;
  avengerKills: number;
  awardScore: number;
  bestClass: string;
  bonusScore: number;
  classes: object[];
  currentRankProgress: number;
  deaths: number;
  dogtagsTaken: number;
  headShots: number;
  headshots: string;
  heals: number;
  highestKillStreak: number;
  id: number;
  infantryKillDeath: number;
  infantryKillsPerMinute: number;
  killAssists: number;
  killDeath: number;
  kills: number;
  killsPerMinute: number;
  longestHeadShot: number;
  loses: number;
  platoons: object[];
  rank: number;
  rankImg: string;
  repairs: number;
  revives: number;
  roundsPlayed: number;
  saviorKills: number;
  scorePerMinute: number;
  secondsPlayed: number;
  skill: number;
  squadScore: number;
  timePlayed: string;
  totalRankProgress: number;
  userName: string;
  vehicles: object[];
  weapons: object[];
  winPercent: string;
  wins: number;
}
