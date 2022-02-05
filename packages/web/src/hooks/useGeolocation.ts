import { LatLngLiteral } from 'leaflet';
import { useEffect, useState } from 'react';

export default function useGeolocation(options?: PositionOptions) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<GeolocationPositionError>();
  const [data, setData] = useState<LatLngLiteral>({
    lat: 41.39507,
    lng: 2.19785,
  });

  useEffect(() => {
    const successHandler = (e: GeolocationPosition) => {
      setLoading(false);
      setError(null);
      setData({
        lat: e.coords.latitude,
        lng: e.coords.longitude,
      });
    };
    const errorHandler = (e: GeolocationPositionError) => {
      setError(e);
      setLoading(false);
    };
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);
    // const id = navigator.geolocation.watchPosition(successHandler, errorHandler, options);
    // return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { loading, error, data };
}
