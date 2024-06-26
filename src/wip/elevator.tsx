// import React from "react";
// import Layout from "@/components/general/layout";
// import Head from "next/head";
// import HeadNav from "../components/general/head-nav";
// import Blocks from "@/components/services/blocks";
// import Tags from "@/components/general/tags";
// import Cards from "../components/services/cards";
// import data from "../../public/data.json";
//
// const Pneumatic = () => {
//   return (
//     <>
//       <Head>
//         <title>Аренда элеватора - Berkana</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Layout>
//         <HeadNav
//           pageName={"аренда элеватора"}
//           subPageFlag={true}
//           style={{
//             background: 'url("/head-elevator.png")',
//             backgroundSize: "fill",
//             backgroundPosition: "center",
//           }}
//         />
//         <div className="service-page elevator">
//           <div className="wrapper">
//             <p>
//               Минсельхоз РФ инициирует разработку проектной документации на
//               строительство судов-зерновозов
//             </p>
//             <p>
//               Создание собственного грузового флота для экспорта российского
//               продовольствия является одной из стратегических задач и важным
//               фактором развития агропромышленного комплекса в Российской
//               Федерации. Актуальность этого вопроса существенно возросла в
//               текущем году в условиях санкционного давления и отказа многих
//               международных перевозчиков от сотрудничества с Россией.
//             </p>
//             <div className="info">
//               <p>
//                 Cпособом транспортировки являются именно морские перевозки
//                 (более 80%).
//               </p>
//             </div>
//             <p>
//               В связи с этим Минсельхоз России инициирует процесс разработки
//               проектной документации для таких судов. Соответствующий заказ по
//               договоренности с ведомством в ближайшее время объявит компания
//               Росагролизинг. В дальнейшем по подготовленным проектам будет
//               осуществляться строительство на российских верфях. При этом
//               Минсельхозом рассматривается возможность оказания заказчикам судов
//               государственной поддержки. Стоимость строительства, а также
//               потребность в бюджетных средствах будут определены по результатам
//               технического проектирования и подбора комплектующего оборудования.
//             </p>
//             <p>
//               Создание парка отечественных судов позволит уйти от зависимости от
//               зарубежных перевозчиков, решить ключевой вопрос логистики и
//               сформировать основу для дальнейшего развития экспорта продукции
//               АПК.
//             </p>
//             <Tags
//               tags={[
//                 "Элеватор",
//                 "Хранение",
//                 "Доработка урожая",
//                 "Аренда",
//                 "Воронеж",
//               ]}
//             />
//           </div>
//           <Cards cards={data.cards.elevator} page={"Элеваторы"} />
//         </div>
//       </Layout>
//     </>
//   );
// };
//
// export default Pneumatic;
