import * as Yup from 'yup';

export const registerSchema = Yup.object({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string()
    .email('Inavlid email')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.number().required('Required').positive().integer().min(11, 'Too short!'),
  password: Yup.string().required('Required').min(6, 'Too short!'),
});
