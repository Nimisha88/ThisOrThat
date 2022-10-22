import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from "./_DATA.js";

export function getInitialData() {
    return Promise.all([_getUsers(), _getQuestions()]).then(
        ([users, polls]) => ({
            users,
            polls,
        })
    );
}

export function savePoll(poll) {
    return _saveQuestion(poll);
}

export function savePollAnswer(poll) {
    return _saveQuestionAnswer(poll);
}

export function verifyCredentials({ uname, pwd }) {
    switch (uname) {
        case "sarahedo": return pwd==="pwd_sarahedo";
        case "tylermcginnis": return pwd==="pwd_tylermcginnis";
        case "mtsamis": return pwd==="pwd_mtsamis";
        case "zoshikanlu": return pwd==="pwd_zoshikanlu";
        default:
            console.log(
                `${uname} is not a registered employee. Please contact administration.`
            );
    }
}
