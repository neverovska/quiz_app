// import { describe, expect, test } from "@jest/globals";
import { formatTime } from "../components/quizPage/TimerDisplay";

describe("formatTime", () => {
  const testTime1 = 5;
  const testTime2 = 11;

  test("should add zero before if number less than 10", () => {
    const result = formatTime(testTime1);

    expect(result).toEqual("05");
  });
  test("shouldn't add zero before if number greater or equal than 10", () => {
    const result = formatTime(testTime2);

    expect(result).toEqual("11");
  });
});
