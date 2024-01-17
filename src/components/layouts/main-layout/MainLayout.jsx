import Navbar from "../../modules/navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./MainLayout.scss";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Outlet />
                    </div>
                    <div className="col-md-4 custom--column"> 
                        <Sidebar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainLayout;
