import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import "../styles/navbar.css"

const Navbar = ({ user }) => {

    if(user===null) {
        return (
            <div>No auth user</div>
        )
    }

    return (
        <nav className="nav">
            <ul className="left-menu">
                <li id="nav-link-home" className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li id="nav-link-leaderboard" className="nav-item">
                    <Link to="/leaderboard">Leaderboard</Link>
                </li>
                <li id="nav-link-new-poll" className="nav-item">
                    <Link to="/new">New Poll</Link>
                </li>
            </ul>
            <ul className="right-menu">
                <li className="nav-item">
                    <Avatar className="avatar" name={user.name} size="50" round="50%" />
                    <h5 className="user-id">{user.id}</h5>
                </li>
                <li id="nav-link-logout" className="nav-item">
                    Logout
                </li>
            </ul>
        </nav>
    );
}

const mapStatesToProps = ({ polls, users, authedUser }) => {
    return {
        user: authedUser===null? null: users[authedUser]
    }
}

export default connect(mapStatesToProps)(Navbar);