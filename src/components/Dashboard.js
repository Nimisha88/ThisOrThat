import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import Poll from "./Poll";
import "../styles/dashboard.css";

const Dashboard = ({ answeredPolls, unansweredPolls }) => {
    const newCategory = "new-cat";
    const doneCategory = "done-cat";

    const [selectedTab, setSelectedTab] = useState(newCategory);

    useEffect(() => {
        const homeLink = document.getElementById("nav-link-home");
        if (homeLink) {
            homeLink.classList.add("selected");
        }
        return () => {
            if (homeLink) {
                homeLink.classList.remove("selected");
            }
        };
    }, []);

    const handleTabClick = (event) => {
        event.preventDefault();

        const newCat = document.getElementById(newCategory);
        const doneCat = document.getElementById(doneCategory);

        switch (event.target.id) {
            case newCategory:
                if (!newCat.classList.contains("selected")) {
                    newCat.classList.add("selected");
                }
                doneCat.classList.remove("selected");
                setSelectedTab("new-cat");
                break;
            case doneCategory:
                if (!doneCat.classList.contains("selected")) {
                    doneCat.classList.toggle("selected");
                }
                newCat.classList.remove("selected");
                setSelectedTab(doneCategory);
                break;
            default:
            // Do nothing!
        }
    };

    return (
        <div className="dashboard">
            <div className="poll-categories" onClick={handleTabClick}>
                <div id={newCategory} className={[newCategory, "selected"].join(" ")}>
                    New Polls
                </div>
                <div id={doneCategory} className={doneCategory}>
                    Completed Polls
                </div>
            </div>
            {selectedTab === "new-cat" && (
                <Fragment>
                    <h2 className="poll-category">
                        Care to share your opinion?
                    </h2>
                    <div className="poll-list">
                        {unansweredPolls &&
                            unansweredPolls.map((pollId) => {
                                return <Poll key={pollId} id={pollId} />;
                            })}
                        {unansweredPolls && unansweredPolls.length === 0 && (
                            <p>No new polls!</p>
                        )}
                    </div>
                </Fragment>
            )}
            {selectedTab === "done-cat" && (
                <Fragment>
                    <h2 className="poll-category">Do others think alike?</h2>
                    <div className="poll-list">
                        {answeredPolls &&
                            answeredPolls.map((pollId) => {
                                return <Poll key={pollId} id={pollId} />;
                            })}
                        {answeredPolls && answeredPolls.length === 0 && (
                            <p>No voted polls!</p>
                        )}
                    </div>
                </Fragment>
            )}
        </div>
    );
};

const mapStatesToProps = ({ polls, authedUser }) => {
    const pollIds = Object.keys(polls).sort(
        (a, b) => polls[b].timestamp - polls[a].timestamp
    );
    const answeredPolls = pollIds.filter(
        (id) =>
            polls[id].optionOne.votes.includes(authedUser) ||
            polls[id].optionTwo.votes.includes(authedUser)
    );
    const unansweredPolls = pollIds.filter(
        (id) =>
            !(
                polls[id].optionOne.votes.includes(authedUser) ||
                polls[id].optionTwo.votes.includes(authedUser)
            )
    );

    return {
        answeredPolls,
        unansweredPolls,
        authedUser,
    };
};

export default connect(mapStatesToProps)(Dashboard);
