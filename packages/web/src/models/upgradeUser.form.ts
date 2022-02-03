import * as Yup from 'yup';

export const upgradeSchema = Yup.object({
  phone: Yup.number().required('Required'),
  bankInfo: Yup.string().required('Required'),
});
