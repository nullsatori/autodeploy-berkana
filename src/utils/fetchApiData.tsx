import axios from "axios";

const apiUrl = "http://localhost:1337/api"; // Replace with your Strapi server URL
const apiToken =
  "a80179440035dfc045309e39ee2e72d186dad3f0a1b3d52087ec6195613dfe49ff0b03f17c58bd6bcd76fcd794dbbe1e15ff3d162016ba128606d752d1b033e50efd5a175df027f134fe2da8a1ac7254b60ed36e990d511031e72c0e62c5436d24685252e8a638e02fac530c7ade4a46afb6d91767a873eb07b156b5509de683"; // Replace with the API token you generated

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
