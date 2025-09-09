import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default MainLayout;
