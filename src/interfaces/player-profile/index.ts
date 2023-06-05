import { PlayerInterface } from 'interfaces/player';

export interface PlayerProfileInterface {
  id?: string;
  player_id: string;
  position: string;
  age: number;
  height: number;
  weight: number;

  player?: PlayerInterface;
  _count?: {};
}
