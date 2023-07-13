import { Header } from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentMainRoutes from "../../../routes/ContentMainRoutes";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="d-flex min-vh-100">
        <Sidebar />
        <div className="flex-grow-1">
          {children}
          <ContentMainRoutes></ContentMainRoutes>
        </div>
      </div>
    </div>
  );
};
