import { useState } from "react";
import MainContainer from "../MainContainer/MainContainer";
import Header from "../Header/HeaderContainer";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default MainLayout;
