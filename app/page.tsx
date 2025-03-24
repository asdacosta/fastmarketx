import styles from "./page.module.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Bot from "./Bot/Bot";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Bot />
      <Footer />
    </>
  );
}
