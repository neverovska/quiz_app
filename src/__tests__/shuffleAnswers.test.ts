import { shuffleAnswers } from "../components/quizPage/QuestionWindow";
import { Question } from "../interfaces";

describe("shuffleAnswers", () => {
  const testQuestion: Question = {
    correct_answer: "Correct Answer",
    incorrect_answers: ["Wrong Answer 1", "Wrong Answer 2", "Wrong Answer 3"],
    type: "",
    difficulty: "",
    category: "",
    question: "",
  };

  test("should return all answers including correct and incorrect", () => {
    const result = shuffleAnswers(testQuestion);

    expect(result).toHaveLength(4);

    const correctAnswers = result.filter((answer) => answer.isCorrect);
    expect(correctAnswers).toHaveLength(1);
    expect(correctAnswers[0].text).toBe("Correct Answer");

    const incorrectAnswers = result.filter((answer) => !answer.isCorrect);
    expect(incorrectAnswers).toHaveLength(3);
    expect(incorrectAnswers.map((answer) => answer.text)).toEqual(
      expect.arrayContaining([
        "Wrong Answer 1",
        "Wrong Answer 2",
        "Wrong Answer 3",
      ]),
    );
  });

  test("should shuffle the answers randomly", () => {
    const shuffledResults = Array(10)
      .fill(null)
      .map(() => shuffleAnswers(testQuestion).map((a) => a.text));

    const allSameOrder = shuffledResults.every(
      (result, _, arr) => result.join("") === arr[0].join(""),
    );
    expect(allSameOrder).toBe(false);
  });
});
