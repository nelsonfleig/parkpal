import * as Yup from 'yup';

export const createParkingSchema = Yup.object({
  price: Yup.number().nullable().min(1).required('Required'),
  startHour: Yup.string()
    .matches(/(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)/)
    .required('Required'),
  endHour: Yup.string()
    .matches(/(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)/)
    .required('Required'),
  daysAvailable: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string(),
        value: Yup.number(),
      })
    )
    .min(1, 'Select at least one day'),
});
