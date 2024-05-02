export const getOpenWeatherData = async ({ lat, lon }: { lat: number, lon: number }) => {
  const data = await fetch(`http://${process.env.API_URL}/api/openweather?lat=${lat}=&lon${lon}&appid=${process.env.OPENWEATHER_API_KEY}`);
  if(!data.ok) {
    throw new Error("Failed to fetch data")
  }

  return data.json()

};