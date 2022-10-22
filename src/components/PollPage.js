import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Poll from "./Poll";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{location, navigate, params}}/>
        );
    }

    return ComponentWithRouterProp;
}

const PollPage = ({ id, authedUser, dispatch }) => {
    return(
        <div>
            <Poll id={id}/>
        </div>
    );
}

const mapStatesToProps = ({ polls, users, authedUser }, props) => {
    const { id } = props.router.params;

    return {
        id,
        authedUser
    };
}

export default withRouter(connect(mapStatesToProps)(PollPage));