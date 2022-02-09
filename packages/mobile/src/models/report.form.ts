import * as Yup from 'yup';

export const reportSchema = Yup.object({
  description: Yup.string()
    .min(10, 'At least 10 character')
    .max(255, 'Pace yourself, you are not writing a book!')
    .required(),
});
