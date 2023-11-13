// BlogLayout.js
import PropTypes from 'prop-types';
import Navbar from './Navbar'; 
import Footer from './Footer'; 

const BlogLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">{children}</div>
                    <div className="col-md-4">
                        {/* Sidebar content can go here */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

BlogLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BlogLayout;