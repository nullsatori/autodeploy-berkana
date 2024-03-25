import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/general/layout";
import { useRouter } from "next/router";
import HeadNav from "../components/general/head-nav";
import React from "react";
import DataDisplaySeeds from "@/components/seeds/data-display-seeds";

const inter = Inter({ subsets: ["latin"] });

export default function Seeds() {
  return (
    <>
      <Head>
        <title>Беркана - Семена</title>
        <meta name="description" content="Каталог семян Berkana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/logo-blue.png" as="image" />
      </Head>
      <Layout logo={"blue"}>
        <HeadNav pageName={"семена"} subPageFlag={true} style="yellow" />
        <div className="szr">
          <DataDisplaySeeds />
        </div>
      </Layout>
    </>
  );
}
