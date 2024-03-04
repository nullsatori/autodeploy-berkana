import fetchApiData from "@/utils/fetchApiData";
import { transliterate as translit } from "transliteration";

export const fetchAllData = async (collectionNames: string[]) => {
  try {
    const dataPromises = collectionNames.map((collectionName) =>
      fetchApiData(collectionName)
    );

    const allData = await Promise.all(dataPromises);

    const dataObj: Record<string, any> = {};
    collectionNames.forEach((collectionName, index) => {
      dataObj[collectionName] = allData[index];
    });

    return dataObj;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it higher up the call stack
  }
};

export const getCyrillicCollectionName = (
  englishName: string,
  cyrillicToEnglish: Record<string, string>
): string | null => {
  const englishToCyrillic: Record<string, string> = {};

  Object.keys(cyrillicToEnglish).forEach((cyrillicName) => {
    const engName = cyrillicToEnglish[cyrillicName];
    englishToCyrillic[engName] = cyrillicName;
  });

  return englishToCyrillic[englishName] || null;
};

export const transliterateRussianToEnglish = (text: string): string => {
  const cleanedText = text.replace(/\(.*?®.*?\)/g, "").replace(/®|%20/g, "");
  const transliteratedText = translit(cleanedText);
  const cleanedTransliteratedText = transliteratedText
    .replace(/\s/g, "")
    .toLowerCase();
  return cleanedTransliteratedText;
};

export const handleNavigation = async (link: string, router: any) => {
  try {
    await router.push(`/${link}`);
    document.body.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  } catch (error) {
    console.error(error);
    throw error;
  }
};
