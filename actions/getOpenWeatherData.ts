import { Location } from "@/types";

export const getOpenWeatherData = async ({ location }: { location: Location }) => {
  if (!location) {
    throw new Error("Location is not defined");
  }
  const URL = process.env.APP_URL;
  const API_KEY = process.env.OPENWEATHER_API_KEY
  const data = await fetch(`${URL}api/openweather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};
