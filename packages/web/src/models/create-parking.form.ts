import * as Yup from 'yup';

export const createParkingSchema = Yup.object({
  price: Yup.number().min(1).required('Required'),
});
