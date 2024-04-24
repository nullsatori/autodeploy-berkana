import Head from "next/head";
import BackgroundSlider from "@/components/index-page/background-slider";
import About from "@/components/index-page/about";
import Video from "@/components/index-page/video";
import Prices from "@/components/index-page/prices";
import AgroVideo from "@/components/index-page/agro-video";
import Layout from "@/components/general/layout";



export default function Home() {
  // const scrolltoHash = function (element_id: string) {
  //   const element = document.getElementById(element_id);
  //   element?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "end",
  //     inline: "nearest",
  //   });
  // };
  return (
    <>
      <Head>
        <title>Беркана</title>
        <meta name="description" content="Главная Berkana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BackgroundSlider />
        <About />
        <Video />
        <Prices />
        <AgroVideo />
      </Layout>
    </>
  );
}
