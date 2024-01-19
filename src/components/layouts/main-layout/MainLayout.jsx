import Navbar from "../../modules/navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./MainLayout.scss";
import ScrollToTopButton from "../../ui/scroll-to-top-button/ScrollToTopButton";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Outlet />
          </div>
          <div className="custom--column col-md-4">
            <aside>
              <Sidebar />
            </aside>
          </div>
          <div className="position-fixed  end-0 bottom-0 mx-md-4 mb-md-5 mb-4 col-auto">
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;