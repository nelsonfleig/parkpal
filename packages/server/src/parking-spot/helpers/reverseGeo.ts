import fetch from 'cross-fetch';
export const getAddressForSingleCoord = async ({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) => {
  const params = new URLSearchParams({
    apiKey: process.env.GEOAPIFY_API_KEY,
    lon: String(lng),
    lat: String(lat),
  }).toString();

  const url = `https://api.geoapify.com/v1/geocode/reverse?${params}`;

  try {
    const res = await fetch(url);
    const { features } = await res.json();
    const {
      properties: { street, country, postcode, city },
    } = features[0];
    const address = {
      street,
      zipCode: postcode,
      city,
      country,
    };
    return address;
  } catch (error) {
    throw Error('Could not geocode address');
  }
};
