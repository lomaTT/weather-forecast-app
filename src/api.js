export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.X_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.X_RAPID_API_HOST
  }
};

export const GEO_API_URL = process.env.GEO_API_URL;
