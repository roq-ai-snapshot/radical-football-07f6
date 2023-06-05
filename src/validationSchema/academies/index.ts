import * as yup from 'yup';
import { eventValidationSchema } from 'validationSchema/events';
import { teamValidationSchema } from 'validationSchema/teams';

export const academyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  event: yup.array().of(eventValidationSchema),
  team: yup.array().of(teamValidationSchema),
});
