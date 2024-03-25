import React from "react";
import { useRouter } from "next/router";

const WIP = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="wip">
      <p>раздел находится в стадии разработки</p>
      <p className="wip-back" onClick={handleGoBack}>
        ← назад
      </p>
    </div>
  );
};

export default WIP;
