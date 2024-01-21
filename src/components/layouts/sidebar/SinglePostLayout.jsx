import Navbar from "../../modules/navbar/Navbar";
import Footer from "../../modules/footer/Footer";
import { Outlet } from "react-router-dom";
import SidebarSinglePost from "../sidebar/SidebarSinglePost";
import ScrollToTopButton from "../../ui/scroll-to-top-button/ScrollToTopButton";

const SingleBlogPostLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Outlet />
                    </div>
                    <div className="col-md-4 custom--column"> 
                    <SidebarSinglePost />
                    </div>
                </div>
            </div>
            <div className="position-fixed  end-0 bottom-0 mx-md-4 mb-md-5 mb-4 col-auto">
            <ScrollToTopButton />
          </div>
            <Footer />
        </>
    );
};

export default SingleBlogPostLayout;