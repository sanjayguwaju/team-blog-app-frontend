import Navbar from "./Nabar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Outlet />
                    </div>
                    <div className="col-md-4"> 
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;
