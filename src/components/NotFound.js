import { Link } from "react-router-dom";
import "../styles/notFound.css"

const imgURL = "https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_1280.jpg";

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={imgURL} alt="404 Page Not Found"/>
            <p>Oops!! It's error 404 which means the Page you requested to view is not found!</p>
            <Link className="backToHome" to="/">Go to Homepage</Link>
        </div>
    );
}

export default NotFound;