import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

interface GeminiResponse {
  measurement: number;
}

export async function consultarGemini(imageBase64: string): Promise<number> {
  const response = await axios.post<GeminiResponse>(
    `${process.env.GEMINI_API_URL}/measure`,
    { image: imageBase64 },
    {
      headers: {
        'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return response.data.measurement;
}
