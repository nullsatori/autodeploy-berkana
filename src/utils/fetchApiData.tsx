import axios from "axios";

const apiUrl = "https://admin.berkanabio.ru/api"; // Replace with your Strapi server URL
const apiToken =
  "8c7e55cb62137310af8c2c8d1b44cc1f96117957315d9ff35a62b6836e78728a54cb999772273fc0f2e824d0abc52df1ab90ede4f2f8417008a2e3c2c07433ee4156d1f9b4a436cd18810045719b4b0b242f7d0ec79e148462bc51e2c2da968d63f5df4caf88998bf0bd5619d360328e949bfee564d71d9c2ba73c84987fff47";

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
