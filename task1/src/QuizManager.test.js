const { QuizManager } = require("./QuizManager");
const { OutputManager } = require("./OutputManager");
const { InputReader } = require("./InputReader");
const { Question } = require("./Question");
const { MockData } = require("./mock_data")
const { SingleAnswerStrategy } = require("./strategies/SingleAnswerStrategy");


describe("QuizManager", () => {
    let inputReader;
    let quizManager;
    let mockData;

    let consoleLogSpy;

    beforeEach(() => {
        inputReader = new InputReader();
        mockData = new MockData();
        const outputManager = new OutputManager();
        quizManager = new QuizManager(mockData.questions, outputManager, inputReader);
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    });
  
    afterEach(() => {
      inputReader.close();
    });

    test("starting quiz manager", () => {
        const data = quizManager.startQuiz()
        
        expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'Question 1: Which generative AI technique is commonly used for generating realistic human faces?')
        expect(consoleLogSpy).toHaveBeenNthCalledWith(2, '1. Variational Autoencoders (VAEs)')
        expect(consoleLogSpy).toHaveBeenNthCalledWith(5, '4. Deep Belief Networks (DBNs)')
    });


    test("display question", () => {
        const data = quizManager.displayQuestion()
        
        expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'Question 1: Which generative AI technique is commonly used for generating realistic human faces?')
    });

    test("answer question", () => {
        const data = quizManager.answerQuestion()
        
        expect(data).toEqual(expect.any(Promise))
    });
});
