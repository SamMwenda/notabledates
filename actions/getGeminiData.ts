export const getGeminiData = async ({ date }: { date: string}) => {
  const data = await fetch(`http://${process.env.API_URL}/api/gemini?date=${date}`);
  
  if (!data.ok) {
    throw new Error("Failed to fetch data")
  }

  return data.json()

};