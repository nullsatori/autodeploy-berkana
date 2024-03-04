// import React, { useEffect, useState } from "react";
// import { CSSTransition } from "react-transition-group";
// import fetchApiData from "@/utils/fetchApiData";
// import Grid from "@/components/szr/grid";
// import Link from "next/link";
// import { transliterate as translit } from "transliteration";
//
// type DataItem = {
//   tags: {
//     dropdown1: string[];
//     dropdown2: string[];
//     dropdown3: string[];
//   };
// };
//
// const DataDisplay: React.FC = () => {
//   const [dropdown1Open, setDropdown1Open] = useState(true);
//   const [dropdown2Open, setDropdown2Open] = useState(false);
//   const [dropdown3Open, setDropdown3Open] = useState(false);
//   const [selectedTagsForDropdown1, setSelectedTagsForDropdown1] = useState<
//     string[]
//   >([]);
//   const [selectedTagsForDropdown2, setSelectedTagsForDropdown2] = useState<
//     string[]
//   >([]);
//   const [selectedTagsForDropdown3, setSelectedTagsForDropdown3] = useState<
//     string[]
//   >([]);
//   const [isGridActive, setIfGridActive] = useState(0);
//
//   const collectionNames = [
//     "agrohimikaty-mikroelementies",
//     "adyuvanty-kleis",
//     "biopreparaties",
//     "biofungiczidy-immunomodulyatories",
//     "gerbiczidies",
//     "desikanties",
//     "insekticzidnye-protraviteli-semyans",
//     "insekticzidies",
//     "makroudobreniyas",
//     "fungiczidnyj-protravitel-semyans",
//     "regulyatory-stimulyatory-rostas",
//     "rodenticzidies",
//     "fumiganties",
//     "fungiczidies",
//     // Add other collection names as needed
//   ];
//
//   const dropdownData = {
//     dropdown1: [
//       "Агрохимикаты, микроэлементы",
//       "Адьюванты, клеи",
//       "Биопрепараты",
//       "Биофунгициды, иммуномодуляторы",
//       "Гербициды",
//       "Десиканты",
//       "Инсектицидные протравители семян",
//       "Инсектициды",
//       "Макроудобрения",
//       "Протравители семян",
//       "Регуляторы, стимуляторы роста",
//       "Родентициды",
//       "Фумиганты",
//       "Фунгициды",
//     ],
//     dropdown2: [
//       "Агрохимикаты, микроэлементы",
//       "Адьюванты, клеи",
//       "Биопрепараты",
//       "Биофунгициды, иммуномодуляторы",
//       "Гербициды",
//       "Десиканты",
//       "Инсектицидные протравители семян",
//       "Инсектициды",
//       "Макроудобрения",
//       "Протравители семян",
//       "Регуляторы, стимуляторы роста",
//       "Родентициды",
//       "Фумиганты",
//       "Фунгициды",
//     ],
//     dropdown3: [
//       "Агрохимикаты, микроэлементы",
//       "Адьюванты, клеи",
//       "Биопрепараты",
//       "Биофунгициды, иммуномодуляторы",
//       "Гербициды",
//       "Десиканты",
//       "Инсектицидные протравители семян",
//       "Инсектициды",
//       "Макроудобрения",
//       "Протравители семян",
//       "Регуляторы, стимуляторы роста",
//       "Родентициды",
//       "Фумиганты",
//       "Фунгициды",
//     ],
//     // Add other dropdowns with their tags here
//   };
//   const cyrillicToEnglish = {
//     "Агрохимикаты, микроэлементы": "agrohimikaty-mikroelementies",
//     "Адьюванты, клеи": "adyuvanty-kleis",
//     Биопрепараты: "biopreparaties",
//     "Биофунгициды, иммуномодуляторы": "biofungiczidy-immunomodulyatories",
//     Гербициды: "gerbiczidies",
//     Десиканты: "desikanties",
//     "Инсектицидные протравители семян": "insekticzidnye-protraviteli-semyans",
//     Инсектициды: "insekticzidies",
//     Макроудобрения: "makroudobreniyas",
//     "Протравители семян": "fungiczidnyj-protravitel-semyans",
//     "Регуляторы, стимуляторы роста": "regulyatory-stimulyatory-rostas",
//     Родентициды: "rodenticzidies",
//     Фумиганты: "fumiganties",
//     Фунгициды: "fungiczidies",
//     // Add other collection names as needed
//   };
//   const getEnglishCollectionName = (cyrillicName: string): string | null => {
//     return cyrillicToEnglish[cyrillicName] || null;
//   };
//   function transliterateRussianToEnglish(text) {
//     const cleanedText = text
//       .replace(/\(.*?®.*?\)/g, "")
//       .replace(/®/g, "")
//       .replace(/%20/g, "");
//     const transliteratedText = translit(cleanedText);
//     const cleanedTransliteratedText = transliteratedText
//       .replace(/\s/g, "")
//       .toLowerCase(); // Remove all whitespace characters
//     return cleanedTransliteratedText;
//   }
//   const getCyrillicCollectionName = (englishName: string): string | null => {
//     const englishToCyrillic: Record<string, string> = {};
//
//     // Reverse the key-value pairs to create englishToCyrillic object
//     Object.keys(cyrillicToEnglish).forEach((cyrillicName) => {
//       const englishName = cyrillicToEnglish[cyrillicName];
//       englishToCyrillic[englishName] = cyrillicName;
//     });
//
//     return englishToCyrillic[englishName] || null;
//   };
//   // Define a state object to hold data for all collections
//   const [allCollectionsData, setAllCollectionsData] = useState<
//     Record<string, DataItem>
//   >({});
//
//   // Function to fetch data for all collections
//   const fetchAllData = async () => {
//     const dataPromises = collectionNames.map((collectionName) =>
//       fetchApiData(collectionName)
//     );
//
//     try {
//       // Wait for all data fetch promises to resolve
//       const allData = await Promise.all(dataPromises);
//
//       // Create an object to store the data with collection names as keys
//       const dataObj: Record<string, DataItem> = {};
//       collectionNames.forEach((collectionName, index) => {
//         dataObj[collectionName] = allData[index];
//       });
//
//       // Set the state with the fetched data
//       setAllCollectionsData(dataObj);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//
//   // Fetch data for all collections on component mount
//   useEffect(() => {
//
//   }, []);
//
//   const toggleDropdown = (dropdownIndex: number) => {
//     switch (dropdownIndex) {
//       case 1:
//         setDropdown1Open((prevOpen) => !prevOpen);
//         break;
//       case 2:
//         setDropdown2Open((prevOpen) => !prevOpen);
//         break;
//       case 3:
//         setDropdown3Open((prevOpen) => !prevOpen);
//         break;
//       default:
//         break;
//     }
//   };
//
//   // Function to render tags for each dropdown
//   const renderTagsForDropdown = (dropdownName: string) => {
//     const selectedTags = dropdownData[dropdownName];
//     const selectedTagsForDropdown = {
//       dropdown1: selectedTagsForDropdown1,
//       dropdown2: selectedTagsForDropdown2,
//       dropdown3: selectedTagsForDropdown3,
//     };
//
//     return selectedTags.map((tag) => {
//       const englishTag = getEnglishCollectionName(tag);
//       return (
//         <label
//           key={tag}
//           className={`tag ${
//             selectedTagsForDropdown[dropdownName].includes(englishTag)
//               ? "active"
//               : ""
//           }`}
//           onClick={() => handleTagSelection(tag, dropdownName)}
//         >
//           <input
//             type="checkbox"
//             checked={selectedTagsForDropdown[dropdownName].includes(englishTag)}
//             onChange={() => handleTagSelection(tag, dropdownName)}
//           />
//           <span className="checkbox-custom"></span>
//           {tag}
//         </label>
//       );
//     });
//   };
//
//   // Function to handle tag selection
//   const handleTagSelection = (tag: string, dropdownName: string) => {
//     const englishTag = getEnglishCollectionName(tag);
//
//     switch (dropdownName) {
//       case "dropdown1":
//         setSelectedTagsForDropdown1((prevSelectedTags) =>
//           prevSelectedTags.includes(englishTag)
//             ? prevSelectedTags.filter(
//                 (selectedTag) => selectedTag !== englishTag
//               )
//             : [...prevSelectedTags, englishTag]
//         );
//         break;
//       case "dropdown2":
//         setSelectedTagsForDropdown2((prevSelectedTags) =>
//           prevSelectedTags.includes(englishTag)
//             ? prevSelectedTags.filter(
//                 (selectedTag) => selectedTag !== englishTag
//               )
//             : [...prevSelectedTags, englishTag]
//         );
//         break;
//       case "dropdown3":
//         setSelectedTagsForDropdown3((prevSelectedTags) =>
//           prevSelectedTags.includes(englishTag)
//             ? prevSelectedTags.filter(
//                 (selectedTag) => selectedTag !== englishTag
//               )
//             : [...prevSelectedTags, englishTag]
//         );
//         break;
//       default:
//         break;
//     }
//   };
//
//   const renderDataForCollection = (collectionName: string) => {
//     const collectionData = allCollectionsData[collectionName];
//     if (!collectionData) return null; // Handle the case when collectionData is not found
//     const cyrillicCategoryName = getCyrillicCollectionName(collectionName);
//
//     // Render the items of the selected collection
//     if (isGridActive) {
//       return collectionData.data.map((item) => (
//         <div key={item.id} className="grid-item">
//           <div className="item-name">{item.attributes.name}</div>
//           <div className="item-image">
//             {/* Replace the "random_image_url" with your actual URL generation function */}
//           </div>
//           <div className="item-collection">{cyrillicCategoryName}</div>
//         </div>
//       ));
//     } else
//       return collectionData.data.map((item) => (
//         <div key={item.id} className="row items">
//           <div className="property name">
//             <Link
//               href={{
//                 pathname: `/bogus/${transliterateRussianToEnglish(
//                   item.attributes.name
//                 )}`,
//               }}
//             >
//               {item.attributes.name}
//             </Link>
//           </div>
//           <div className="property manufacturer">
//             {item.attributes.component.manufacturer || "—"}
//           </div>
//           <div className="property substances">
//             {item.attributes.component.agents
//               ? item.attributes.component.agents.names.join(" + ") +
//                 " " +
//                 item.attributes.component.agents.rates
//               : "—"}
//           </div>
//           <div className="property price">
//             {item.attributes.component.price_1 !== null &&
//             item.attributes.component.price_1 !== undefined
//               ? item.attributes.component.price_1 + " ₽"
//               : "—"}
//           </div>
//           <div className="property price">
//             {item.attributes.component.price_2 !== null &&
//             item.attributes.component.price_2 !== undefined
//               ? item.attributes.component.price_2 + " ₽"
//               : "—"}
//           </div>
//           <div className="property norms">
//             {item.attributes.component.rates?.replace(/-/, "—") || "—"}
//           </div>
//           <div className="property packaging">
//             {item.attributes.component.container || "—"}
//           </div>
//         </div>
//       ));
//   };
//
//   const renderAllCollectionsData = () => {
//     return collectionNames.map((collectionName) => (
//       <>{renderDataForCollection(collectionName)}</>
//     ));
//   };
//
//   const renderDataBasedOnSelectedTags = () => {
//     // Combine selected tags from all dropdowns
//     const combinedSelectedTags = [
//       ...selectedTagsForDropdown1,
//       ...selectedTagsForDropdown2,
//       ...selectedTagsForDropdown3,
//     ];
//
//     if (combinedSelectedTags.length > 0) {
//       // Filter the collection names based on the selected tags
//       const filteredCollectionNames = collectionNames.filter((collectionName) =>
//         combinedSelectedTags.includes(collectionName)
//       );
//
//       // Render data for the filtered collection names
//       return filteredCollectionNames.map((collectionName) => (
//         <div key={collectionName} id={collectionName}>
//           {renderDataForCollection(collectionName)}
//         </div>
//       ));
//     } else {
//       // If no tags are selected, render data for all collections
//       return renderAllCollectionsData();
//     }
//   };
//
//   return (
//     <div className="data-display">
//       <div className="tag-menu">
//         <div className={`dropdown ${dropdown1Open ? "open" : ""}`}>
//           <h3 onClick={() => toggleDropdown(1)}>Dropdown 1</h3>
//           <CSSTransition
//             in={dropdown1Open}
//             classNames="fade"
//             timeout={300}
//             unmountOnExit
//           >
//             <div className="tag-buttons">
//               {renderTagsForDropdown("dropdown1")}
//             </div>
//           </CSSTransition>
//         </div>
//         <div className={`dropdown ${dropdown2Open ? "open" : ""}`}>
//           <h3 onClick={() => toggleDropdown(2)}>Dropdown 2</h3>
//           <CSSTransition
//             in={dropdown2Open}
//             classNames="fade"
//             timeout={300}
//             unmountOnExit
//           >
//             <div className="tag-buttons">
//               {renderTagsForDropdown("dropdown2")}
//             </div>
//           </CSSTransition>
//         </div>
//         <div className={`dropdown ${dropdown3Open ? "open" : ""}`}>
//           <h3 onClick={() => toggleDropdown(3)}>Dropdown 3</h3>
//           <CSSTransition
//             in={dropdown3Open}
//             classNames="fade"
//             timeout={300}
//             unmountOnExit
//           >
//             <div className="tag-buttons">
//               {renderTagsForDropdown("dropdown3")}
//             </div>
//           </CSSTransition>
//         </div>
//       </div>
//       <div className="data-display-wrapper">
//         <button
//           style={{ width: "40px", height: "30px" }}
//           onClick={() => setIfGridActive(!isGridActive)}
//         ></button>
//         {isGridActive ? (
//           <div className="grid-container">
//             {renderDataBasedOnSelectedTags()}
//           </div>
//         ) : (
//           <div className="table-container">
//             <div className="table-wrapper">
//               <div className="table">
//                 <div className="data-container">
//                   <div className="row head">
//                     <div className="property name">Наименование</div>
//                     <div className="property manufacturer">Производитель</div>
//                     <div className="property substances">
//                       Действующие вещества
//                     </div>
//                     <div className="property price">100%</div>
//                     <div className="property price">30/70%</div>
//                     <div className="property norms">Нормы</div>
//                     <div className="property packaging">Тара</div>
//                   </div>
//                   {renderDataBasedOnSelectedTags()}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
//
// export default DataDisplay;
