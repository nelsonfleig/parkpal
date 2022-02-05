import { LatLng } from '../types/lat-lng.type';

/**
 * Calculates the distance between an origin and a given coordinate and returns a boolean if the distance is in a given search radius
 *
 * @param origin Origin of search radius
 * @param coord Coord to find distance to
 * @param searchRadius Search threshold in Km for distance between origin and coord
 * @returns boolean
 */
export function filterByDistance(
  origin: LatLng,
  coord: LatLng,
  searchRadius = 0.3 // in km
) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(coord.lat - origin.lat); // deg2rad below
  const dLon = deg2rad(coord.lng - origin.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(origin.lat)) *
      Math.cos(deg2rad(coord.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d < searchRadius;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}
