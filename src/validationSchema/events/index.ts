import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  date: yup.date().required(),
  time: yup.date().required(),
  academy_id: yup.string().nullable().required(),
});
