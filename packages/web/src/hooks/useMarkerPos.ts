import { LatLngExpression } from 'leaflet';
import { useState } from 'react';
import { useMapEvents } from 'react-leaflet';

export const useMarkerPos = () => {
  const [markerPos, setMarkerPos] = useState<LatLngExpression>();

  useMapEvents({
    click: (e) => {
      setMarkerPos(e.latlng);
    },
  });
  return markerPos;
};
