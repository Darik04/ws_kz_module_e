const { MultipleChoiceStrategy } = require("./MultipleChoiceStrategy");

describe("MultipleChoiceStrategy", () => {
    test("check model", () => {
        const mockModel = new MultipleChoiceStrategy([1, 2])
        expect(mockModel).toEqual(mockModel)
    });



    test("check answer", () => {
        const mockModel = new MultipleChoiceStrategy([1, 2])
        const data1 = mockModel.checkAnswer([1, 2])
        const data2 = mockModel.checkAnswer([2, 3])
        const data3 = mockModel.checkAnswer([1])
        expect(data1).toBe(true)
        expect(data2).toBe(false)
        expect(data3).toBe(false)
    });
});
