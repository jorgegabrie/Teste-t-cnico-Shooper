import axios from 'axios';

interface LLMResponse {
  value: number;
}

export async function consultarLLM(imageBase64: string): Promise<number> {
  const response = await axios.post<LLMResponse>(
    `${process.env.LLM_API_URL}/extract`,
    { image: imageBase64 },
    {
      headers: {
        'Authorization': `Bearer ${process.env.LLM_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return response.data.value;
}
