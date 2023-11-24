const { Question } = require("./Question");
const { SingleAnswerStrategy } = require("./strategies/SingleAnswerStrategy");
const { MultipleCorrectAnswersStrategy } = require("./strategies/MultipleCorrectAnswersStrategy");

class MockData{
    mockQuestion = new Question(
        "Which generative AI technique is commonly used for generating realistic human faces?",
        [
            "Variational Autoencoders (VAEs)",
            "Generative Adversarial Networks (GANs)",
            "Recurrent Neural Networks (RNNs)",
            "Deep Belief Networks (DBNs)",
        ],
        new SingleAnswerStrategy([2])
    );

    mockQuestionMultiple = new Question(
        "Select a correct generative AI technique:",
        [
            "Variational Autoencoders (VAEs)",
            "Generative Adversarial Networks (GANs)",
            "Recurrent Neural Networks (RNNs)",
            "Deep Belief Networks (DBNs)",
        ],
        new MultipleCorrectAnswersStrategy([1, 2, 4])
    );



    questions = [
        new Question(
            "Which generative AI technique is commonly used for generating realistic human faces?",
            [
                "Variational Autoencoders (VAEs)",
                "Generative Adversarial Networks (GANs)",
                "Recurrent Neural Networks (RNNs)",
                "Deep Belief Networks (DBNs)",
            ],
            new SingleAnswerStrategy([2])
        ),
        new Question(
            "What is the purpose of style transfer in generative AI?",
            [
                "Generating realistic human faces",
                "Converting text to speech",
                "Transferring artistic styles onto images",
                "Predicting stock market trends",
            ],
            new SingleAnswerStrategy([3])
        ),
        new Question(
            "Which generative AI technique is commonly used for text generation tasks?",
            [
                "Convolutional Neural Networks (CNNs)",
                "Long Short-Term Memory (LSTM) networks",
                "K-means clustering",
                "Reinforcement Learning (RL)",
            ],
    
            new SingleAnswerStrategy([2])
        )
    ]
    
}


module.exports = { MockData };