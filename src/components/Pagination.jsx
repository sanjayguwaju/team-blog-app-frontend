import { useState, useEffect } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const [pageLinks, setPageLinks] = useState([]);

    const generatePageLinks = () => {
        const links = [];
        for (let i = 1; i <= totalPages; i++) {
            links.push(
                <li className={`page-item ${i === currentPage ? 'active' : ''}`} key={i}>
                    <a className="page-link" href="#" onClick={() => onPageChange(i)}>
                        {i}
                    </a>
                </li>
            );
        }
        setPageLinks(links);
    };

    useEffect(() => {
        generatePageLinks();
    }, [currentPage, totalPages]);

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} key="previous">
                        <a className="page-link" href="#" onClick={() => onPageChange(currentPage - 1)}>
                            &laquo;
                        </a>
                    </li>
                    {pageLinks}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`} key="next">
                        <a className="page-link" href="#" onClick={() => onPageChange(currentPage + 1)}>
                            &raquo;
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
