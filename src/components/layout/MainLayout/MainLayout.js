import MainContainer from "../MainContainer/MainContainer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }) => (
  <>
    <Header />
    <MainContainer>{children}</MainContainer>
    <Footer />
  </>
);

export default MainLayout;
