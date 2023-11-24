const { Question } = require("./Question");
const { SingleAnswerStrategy } = require("./strategies/SingleAnswerStrategy");
const { MockData } = require("./mock_data")


describe("Question", () => {
    let mockData;
    
    beforeEach(() => {
        mockData = new MockData();
      });

    test("check question model", () => {
        expect(mockData.mockQuestion).toEqual(mockData.mockQuestion)
    });

    test("check question model with multiple choices", () => {
        expect(mockData.mockQuestionMultiple).toEqual(mockData.mockQuestionMultiple)
    });
});
