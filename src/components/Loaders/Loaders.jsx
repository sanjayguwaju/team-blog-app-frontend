import { SyncLoader } from "react-spinners";
import "./Loaders.css"

const Loaders = ({ isLoading }) => {
    return (
        <div className="loader-container">
            {isLoading && (
                <div className="loader">
                    <SyncLoader color="#786eb4" margin={20} size={30} />
                </div>
            )}
        </div>
    )
}

export default Loaders
