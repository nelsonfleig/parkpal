import axios from 'axios';

const defaultParams = {
  access_key: '26f75fa9914832a31678d46986c5fd01',
};

const BASE_URL = 'http://api.positionstack.com/v1';

console.log(process.env.NEXT_POSITION_STACK_KEY);

export const getAddressForCoords = ({ lat, lng }: { lat: number; lng: number }) =>
  axios.get(`${BASE_URL}/reverse`, {
    params: {
      ...defaultParams,
      query: `${lat.toFixed(6)},${lng.toFixed(6)}`,
    },
  });
