export const useRamdomQuotes = () => {
  async function getRandomQuotes(): Promise<string> {
    const resp = await fetch(`https://dummyjson.com/quotes/random`);
    const data = await resp.json();
    return data.quote;
  }

  return { getRandomQuotes };
};
