import * as yup from 'yup';

export const playerProfileValidationSchema = yup.object().shape({
  position: yup.string().required(),
  age: yup.number().integer().required(),
  height: yup.number().integer().required(),
  weight: yup.number().integer().required(),
  player_id: yup.string().nullable().required(),
});
