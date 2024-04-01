

import Head from "next/head";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


export default function Maintenance() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <>
      <Head>
        <title>Беркана</title>
        <meta name="description" content="Главная Berkana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="maintenance">
        <div className="maintenance-content">
            <h1>Сайт в разработке</h1>
            <p>Пожалуйста, свяжитесь с нами по следующим контактам:</p>
            <p>Email: berkanabio@gmail.com</p>
          
          <div className="info">
            <div className="info-head">
              <div className="block">
                <div>
                  <h3>Сафонов Артем Владимирович</h3>
                  <p>Управляющий</p>
                </div>
                <h3>8 (473) 300-39-14</h3>
              </div>
              <div className="block">
                <div>
                  <h3>Подобряев Андрей Юрьевич</h3>
                  <p>Заместитель</p>
                </div>
                <h3>8 (473) 300-39-14</h3>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </>
  );
}
