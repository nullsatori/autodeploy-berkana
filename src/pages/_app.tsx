import "@/styles/globals.scss";
import "@/styles/index-page/background-slider.scss";
import "@/styles/index-page/index-about.scss";
import "@/styles/index-page/video.scss";
import "@/styles/index-page/prices.scss";
import "@/styles/index-page/partners.scss";
import "@/styles/footer.scss";
import "@/styles/index-page/events.scss";
import "@/styles/index-page/agro-video.scss";
import "@/styles/menu.scss";
import "@/styles/index-page/embla-carousel.scss";
import "@/styles/services/head-nav.scss";
import "@/styles/services/blocks.scss";
import "@/styles/services/sub-pages/services-pages.scss";
import "@/styles/services/cards.scss";
import "@/styles/contacts/contacts.scss";
import "@/styles/szr/table.scss";
import "@/styles/szr/szr.scss";
import "@/styles/generic-pages/pages.scss";
import "@/styles/about/about.scss";
import "@/styles/maintenance.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
