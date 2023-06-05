import { EventInterface } from 'interfaces/event';
import { TeamInterface } from 'interfaces/team';
import { UserInterface } from 'interfaces/user';

export interface AcademyInterface {
  id?: string;
  name: string;
  user_id: string;
  event?: EventInterface[];
  team?: TeamInterface[];
  user?: UserInterface;
  _count?: {
    event?: number;
    team?: number;
  };
}
