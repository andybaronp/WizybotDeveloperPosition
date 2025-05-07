import { useEffect, useState } from "react";

export const useRamdomQuotes = () => {
  const [quotes, setQuotes] = useState<string>("");
  const [getRandomQuote, setGetRandomQuote] = useState<boolean>(false);

  async function getRandomQuotes() {
    const resp = await fetch(`https://dummyjson.com/quotes/random`);
    const data = await resp.json();
    setQuotes(data.quote);
  }

  useEffect(() => {
    if (!getRandomQuote) return;
    getRandomQuotes();
    setGetRandomQuote(false);
  }, [getRandomQuote]);

  return { quotes, setGetRandomQuote };
};
