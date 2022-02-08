import * as Yup from 'yup';

export const upgradeSchema = Yup.object({
  phone: Yup.number().min(5, 'Too Short!').max(18, 'Too Long!').required('Required'),
  bankInfo: Yup.string().required('Required'),
});
