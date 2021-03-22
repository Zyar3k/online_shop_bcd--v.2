import { useState } from "react";
import MainContainer from "../MainContainer/MainContainer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CartIndicator from "../../common/CartIndicator/CartIndicator";

const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* {isOpen ? null : <CartIndicator isOpen={isOpen} />} */}
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default MainLayout;
