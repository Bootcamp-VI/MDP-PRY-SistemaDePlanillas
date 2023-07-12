import { Header } from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        {children}
      </div>
    </div>
  );
};
