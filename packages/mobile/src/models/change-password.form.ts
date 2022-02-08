import * as Yup from 'yup';

export const changePasswordSchema = Yup.object({
  changePasswordCurrent: Yup.string().required('Required'),
  changePasswordNew: Yup.string().required('Required'),
  changePasswordConfirm: Yup.string().oneOf(
    [Yup.ref('changePasswordNew'), null],
    'Passwords must match'
  ),
});
