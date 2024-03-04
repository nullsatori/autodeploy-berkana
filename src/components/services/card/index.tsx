// import React, { useState } from "react";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import Tags from "@/components/general/tags";
//
// const Card = ({ card }) => {
//   const [hovered, setHovered] = useState(false);
//
//   return (
//     <motion.div
//       className="card"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//     >
//       <div className="card-wrapper">
//         <h4>{card.name}</h4>
//         <motion.img src={card.img} />
//         <p>{card.description}</p>
//         {hovered && <Tags tags={[...card.tags]} />}
//       </div>
//     </motion.div>
//   );
// };
//
// export default Card;
