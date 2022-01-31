import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string().email('Inavlid email').required('Required'),
  password: Yup.string().required('Required'),
});
