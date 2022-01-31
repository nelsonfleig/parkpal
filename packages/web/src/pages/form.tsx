import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FormikText } from '../components/formik/formik-text';

const FormPage = () => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters long')
        .max(50)
        .required('Required'),
    })}
    onSubmit={(values, actions) => {
      console.log(values);
    }}>
    {({ isSubmitting, isValid }) => (
      <Form>
        <FormikText name="email" />
        <FormikText name="password" type="password" />
      </Form>
    )}
  </Formik>
);

export default FormPage;
