import * as yup from 'yup';
import { playerProfileValidationSchema } from 'validationSchema/player-profiles';
import { trainingPlanValidationSchema } from 'validationSchema/training-plans';

export const playerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  team_id: yup.string().nullable().required(),
  player_profile: yup.array().of(playerProfileValidationSchema),
  training_plan: yup.array().of(trainingPlanValidationSchema),
});
