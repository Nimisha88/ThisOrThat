import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from "../reducers/reducers"
import middlewares from "../middlewares/middlewares"
import { MemoryRouter as Router } from 'react-router-dom';
import { initializeAppData } from "../actions/actions";
import { setAuthedUser } from "../actions/authedUser";
import Leaderboard from "../components/Leaderboard";

const store = createStore(reducers, middlewares);

test("renders Leaderboard", async () => {
    await store.dispatch(initializeAppData());
    await store.dispatch(setAuthedUser("sarahedo"));
    const view = render(
        <Provider store={store}>
            <Router>
                <Leaderboard />
            </Router>
        </Provider>
    );
    
    expect(view).toMatchSnapshot();
});