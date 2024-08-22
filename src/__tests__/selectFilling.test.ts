import { selectFilling } from "../pages/StartPage";
import { Option } from "../interfaces";

describe("selectFilling", () => {
  const testOption: Option = { value: "testValue", label: "testLabel" };

  test("should correctly transform an Option item into an object with value and label", () => {
    const result = selectFilling(testOption);

    expect(result).toEqual({
      value: "testValue",
      label: "testLabel",
    });
  });
});
