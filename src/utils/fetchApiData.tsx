import axios from "axios";

const apiUrl = "http://localhost:1337/api"; // Replace with your Strapi server URL
const apiToken =
  "60d1a28c385a630993fecb3a7064fc90530f31f24cbc706cc1f1d11b6ce4d352db8c98b6de5535eb45a77234e09eeea5861b89a724773524ac9c16682951057b3b5a8811ead65dab73aee2ae2e99a141a7c1cb487bd2c0b74ef2a098e82049ee0ed1e4d6d341b7c8c952abe453db8ee43c25f7c0691ef62eb3610921b5af63e5"; // Replace with the API token you generated

const fetchApiData = async (endpoint: string) => {
  try {
    const response = await axios.get(
      `${apiUrl}/${endpoint}?populate=*&_limit=1000`,
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchApiData;
