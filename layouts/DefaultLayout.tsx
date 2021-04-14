import { FC } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const DefaultLayout: FC = (props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
