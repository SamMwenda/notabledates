import { Location } from "@/types";

export const getOpenWeatherData = async ({ location }: { location: Location }) => {
  if (!location) {
    throw new Error("Location is not defined");
  }

  console.log(location);
  const data = await fetch(`http://localhost:3000/api/openweather?lat=${location.latitude}&lon=${location.longitude}&appid=1617431d2dd38eebc6d469aae6e0fb31`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};
