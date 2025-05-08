import { CONSTANTS } from "../utils/constans";

const apiQuotes = async () => {
  try {
    const response = await fetch(CONSTANTS.API_QUOTES);
    const data = await response.json();
    return data.quote;
  } catch (error) {
    console.log(error);
    return "I'm sorry, I could not get a quote";
  }
};

export default apiQuotes;
