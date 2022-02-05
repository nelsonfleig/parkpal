import { randomColorC } from '../../helpers/calendar';

export const eventStyleGetter = (event: any) => {
  const style = {
    backgroundColor: randomColorC(event.id),
    borderRadius: '5px',
    color: 'white',
    border: '0px',
    padding: '.8rem',
    borderLeft: '3px solid #d9d9d9',
  };
  return {
    style,
  };
};
