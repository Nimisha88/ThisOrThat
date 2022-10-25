export function formatDate(timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleTimeString("en-US");
    return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function getNumberOfVotes(poll) {
    return poll.optionOne.votes.length + poll.optionTwo.votes.length
}

export function getLeaderboardScore(user) {
    return Object.keys(user.answers).length + user.questions.length
}

export const verifyCredentials = ({ user, uname, pwd }) => {
    return (user.id === uname) && (user.password === pwd);
}