const { InputReader } = require("./InputReader");
const { Question } = require("./Question");
const { SingleAnswerStrategy } = require("./strategies/SingleAnswerStrategy");
const { MockData } = require("./mock_data")


describe("InputReader", () => {
    let inputReader;
    let mockData;

    beforeEach(() => {
      inputReader = new InputReader();
      mockData = new MockData();
    });
  
    afterEach(() => {
      inputReader.close();
    });
 
    it("read answers", () => {
        const data = inputReader.readAnswers(mockData.mockQuestion)
        const ex = expect(data).toEqual(expect.any(Promise))
    });


    it("handle answer", async () => {
        const data = await (new Promise((resolve) => {
            inputReader.handleAnswer('1', mockData.mockQuestion, 'query', resolve)
        }))
        const ex = expect(data).toEqual([1])
    });

    it("get invalid answers", async () => {
        const incorrectAnswer = 'Variational Autoencoders (VAEs)'
        const data = inputReader.getInvalidAnswers(incorrectAnswer, mockData.mockQuestion)
        const ex = expect(data).toEqual([incorrectAnswer])
    });
});
