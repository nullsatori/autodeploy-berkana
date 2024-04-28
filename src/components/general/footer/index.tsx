import React from "react";
import { handleNavigation } from "@/utils/utils";
import { useRouter } from "next/router";
import Link from "next/link";

const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <div className="footer">
      <div className="contact">
        <p>Написать нам</p>
        <svg
          width="49"
          height="44"
          viewBox="0 0 49 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5 34.2222L14.7 44V34.2222H4.9C3.60044 34.2222 2.3541 33.7071 1.43518 32.7903C0.516249 31.8735 0 30.6299 0 29.3333V4.88889C0 2.2 2.205 0 4.9 0H44.1C45.3996 0 46.6459 0.515078 47.5648 1.43192C48.4838 2.34877 49 3.59227 49 4.88889V29.3333C49 30.6299 48.4838 31.8735 47.5648 32.7903C46.6459 33.7071 45.3996 34.2222 44.1 34.2222H24.5ZM12.25 14.6667V19.5556H17.15V14.6667H12.25ZM22.05 14.6667V19.5556H26.95V14.6667H22.05ZM31.85 14.6667V19.5556H36.75V14.6667H31.85Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex">
        <div className="left">
          <div className="wrapper">
            <img src="/logo-footer.png" alt="" />
            <div className="contacts">
              <p>+7 437 300 39 14</p>
              <p>inbox@berkana-bio.ru</p>
            </div>
            <div className="links">
              <Link href="/about" passHref>
                <span onClick={() => handleNavigation("about", router)}>
                  О компании
                </span>
              </Link>
              <Link href="/wip" passHref>
                <span onClick={() => handleNavigation("wip", router)}>
                  Агропроект
                </span>
              </Link>
              <Link href="/wip" passHref>
                <span onClick={() => handleNavigation("wip", router)}>
                  События
                </span>
              </Link>
              <Link href="/wip" passHref>
                <span onClick={() => handleNavigation("wip", router)}>
                  Средства защиты
                </span>
              </Link>
              <Link href="/partners" passHref>
                <span onClick={() => handleNavigation("partners", router)}>
                  Наши партнеры
                </span>
              </Link>
              <Link href="/seeds" passHref>
                <span onClick={() => handleNavigation("seeds", router)}>
                  Семена
                </span>
              </Link>
              <Link href="/contacts" passHref>
                <span onClick={() => handleNavigation("contacts", router)}>
                  Контакты
                </span>
              </Link>
              <Link href="/services" passHref>
                <span onClick={() => handleNavigation("services", router)}>
                  Услуги
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h1>
              <b>Подписаться </b>
              на e-mail рассылку
            </h1>
            <p>
              Получайте по электронной почте обновления о том, о чем Вы захотите
              узнать, включая продукты, запуски и события.{" "}
              <b>Отпиcаться можно в любое время.</b>
            </p>
            <form>
              <input type="text" placeholder="Введите ваш e-mail адрес" />
              <input type="submit" value="→" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
