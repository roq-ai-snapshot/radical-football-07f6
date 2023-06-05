import { CoachInterface } from 'interfaces/coach';
import { PlayerInterface } from 'interfaces/player';
import { AcademyInterface } from 'interfaces/academy';

export interface TeamInterface {
  id?: string;
  name: string;
  academy_id: string;
  coach?: CoachInterface[];
  player?: PlayerInterface[];
  academy?: AcademyInterface;
  _count?: {
    coach?: number;
    player?: number;
  };
}
