import { Location } from "@/types";

export const getOpenWeatherData = async ({ location }: { location: Location }) => {
  if (!location) {
    throw new Error("Location is not defined");
  }

  console.log(location);
  const data = await fetch(`${process.env.APP_URL}api/openweather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.OPENWEATHER_API_KEY}`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};
