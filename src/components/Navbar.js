import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({ authedUser }) => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/leaderboard">Leaderboard</Link>
                </li>
                <li>
                    <Link to="/new">New Poll</Link>
                </li>
            </ul>
        </nav>
    );
}

const mapStatesToProps = ({ polls, users, authedUser }) => {
    return {
        authedUser
    }
}

export default connect(mapStatesToProps)(Navbar);