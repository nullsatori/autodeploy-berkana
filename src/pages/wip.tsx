import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const WIP = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Беркана - В разработке</title>
      </Head>
      <div className="wip">
        <p>раздел находится в стадии разработки</p>
        <p className="wip-back" onClick={handleGoBack}>
          ← назад
        </p>
      </div>
    </>
    
  );
};

export default WIP;
