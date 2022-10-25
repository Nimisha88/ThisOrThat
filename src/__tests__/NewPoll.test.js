/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducers from "../reducers/reducers"
import middlewares from "../middlewares/middlewares"
import { MemoryRouter as Router } from 'react-router-dom';
import { initializeAppData } from "../actions/actions";
import { setAuthedUser } from "../actions/authedUser";
import NewPoll from "../components/NewPoll";
import '@testing-library/jest-dom/extend-expect';

const store = createStore(reducers, middlewares);
const onSubmitSpy = jest.fn();

describe("NewPoll", () => {
    it("will have all expected fields", async () => {
        await store.dispatch(initializeAppData());
        await store.dispatch(setAuthedUser("sarahedo"));

        const view = render(
            <Provider store={store}>
                <Router>
                    <NewPoll onSubmit={onSubmitSpy}/>
                </Router>
            </Provider>
        );
        
        const optOneEle = view.getByTestId("opt1");
        const optTwoEle = view.getByTestId("opt2");
        const submitEle = view.getByText("Create Poll");
        
        expect(optOneEle).toBeInTheDocument();
        expect(optTwoEle).toBeInTheDocument();
        expect(submitEle).toBeInTheDocument();

        fireEvent.change(optOneEle, {target: {value: "Eat bread"}});
        fireEvent.change(optTwoEle, {target: {value: "Eat bagel"}});
        
        expect(optOneEle.value).toEqual("Eat bread");
        expect(optTwoEle.value).toEqual("Eat bagel");
    });
});