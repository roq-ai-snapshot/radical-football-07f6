import { PlayerProfileInterface } from 'interfaces/player-profile';
import { TrainingPlanInterface } from 'interfaces/training-plan';
import { UserInterface } from 'interfaces/user';
import { TeamInterface } from 'interfaces/team';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  team_id: string;
  player_profile?: PlayerProfileInterface[];
  training_plan?: TrainingPlanInterface[];
  user?: UserInterface;
  team?: TeamInterface;
  _count?: {
    player_profile?: number;
    training_plan?: number;
  };
}
