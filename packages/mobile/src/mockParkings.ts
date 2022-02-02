export type ParkingSpotType = {
  id: number;
  latitude: number;
  longitude: number;
  pictureUrl: string;
  user: number;
  reservations: string;
  price: number;
};

export const mockParkingSpots = [
  {
    id: 0,
    latitude: 41.39687864195948,
    longitude: 2.1757587744370412,
    pictureUrl: '',
    user: 1,
    reservations: '',
    price: 5,
  },
  {
    id: 1,
    latitude: 41.397361784432356,
    longitude: 2.174023071102138,
    pictureUrl: '',
    user: 5,
    reservations: '',
    price: 5,
  },
  {
    id: 2,
    latitude: 41.400797950745385,
    longitude: 2.1903682429294813,
    pictureUrl: '',
    user: 1,
    reservations: '',
    price: 5,
  },
  {
    id: 3,
    latitude: 41.3957013908695,
    longitude: 2.1784267652996436,
    pictureUrl: '',
    user: 1,
    reservations: '',
    price: 5,
  },
];
