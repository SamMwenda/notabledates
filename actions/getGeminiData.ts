import { GeminiParams } from "@/types";

export const getGeminiData = async ( params: GeminiParams ) => {
  const data = await fetch(`http://localhost:3000/api/gemini?month=${params.month}&date${params.date}`, { method: 'POST', });
  
  if (!data.ok) {
    throw new Error("Failed to fetch data")
  }

  return data.json()

};