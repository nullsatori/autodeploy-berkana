import React, { useState } from "react";
import Header from "@/components/general/header";
import Footer from "@/components/general/footer";
import Menu from "@/components/general/menu";

interface LayoutProps {
  children: React.ReactNode;
  style?: string;
  logo?: "blue" | "yellow" | "white" | undefined; // Make sure the logo prop matches the allowed values
}

const Layout: React.FC<LayoutProps> = ({ children, style, logo }) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <>
      <Header setMenuActive={setMenuActive} style={style} logo={logo} />
      {children}
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <Footer />
    </>
  );
};

export default Layout;
