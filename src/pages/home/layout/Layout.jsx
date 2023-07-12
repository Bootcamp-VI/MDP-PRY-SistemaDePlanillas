import { Header } from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentMainRoutes from "../../../routes/ContentMainRoutes";

export const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        {children}
        <ContentMainRoutes></ContentMainRoutes>
      </div>
    </div>
  );
};
