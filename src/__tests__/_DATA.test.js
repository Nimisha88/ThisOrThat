import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

// Test data for "_saveQuestion"
const optionOneText = "Eat noodles";
const optionTwoText = "Eat salad";
const author = "sarahedo";

// Test Data for "_saveQuestionAnswer"
const authedUser = "zoshikanlu";
const qid = "vthrdm985a262al8qx3do";
const answer = "optionTwo";

describe("_saveQuestion", () => {
    it("returns a formatted question", async () => {
        const result = await _saveQuestion({
            optionOneText,
            optionTwoText,
            author
        })
        expect(result).toHaveProperty("id");
        expect(result).toHaveProperty("author", "sarahedo");
        expect(result).toHaveProperty("optionOne", {
            text: optionOneText,
            votes: []
        });
        expect(result).toHaveProperty("optionTwo", {
            text: optionTwoText,
            votes: []
        });
        expect(result).toHaveProperty("timestamp");
    });

    it("returns error when optionOneText is missing", async () => {
        await expect(_saveQuestion({ optionTwoText, author }))
        .rejects
        .toEqual("Please provide optionOneText, optionTwoText, and author");
    });

    it("returns error when optionTwoText is missing", async () => {
        await expect(_saveQuestion({ optionOneText, author }))
        .rejects
        .toEqual("Please provide optionOneText, optionTwoText, and author");
    });

    it("returns error when optionAuthor is missing", async () => {
        await expect(_saveQuestion({ optionOneText, optionTwoText }))
        .rejects
        .toEqual("Please provide optionOneText, optionTwoText, and author");
    });
});

describe ("_saveQuestionAnswer", () => {
    it("returns true when answer saved successfully", async () => {
        await(expect(_saveQuestionAnswer({ authedUser, qid, answer })))
        .resolves
        .toEqual(true);
    });
    
    it("returns error when User ID is missing", async () => {
        await(expect(_saveQuestionAnswer({ qid, answer })))
        .rejects
        .toEqual("Please provide authedUser, qid, and answer");
    });

    it("returns error when Question ID is missing", async () => {
        await(expect(_saveQuestionAnswer({ authedUser, answer })))
        .rejects
        .toEqual("Please provide authedUser, qid, and answer");
    });

    it("returns error when Question's Answer is missing", async () => {
        await(expect(_saveQuestionAnswer({ authedUser, qid })))
        .rejects
        .toEqual("Please provide authedUser, qid, and answer");
    });
});