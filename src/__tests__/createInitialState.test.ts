import { createInitialState } from "../redux/slices/statisticsSlice";
import { Option } from "../interfaces";

describe("createInitialState", () => {
  test("should return an empty object when given an empty array", () => {
    const result = createInitialState([]);
    expect(result).toEqual({});
  });

  test("should return an object with keys from the input array and values set to 0", () => {
    const items: Option[] = [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ];

    const expectedState = {
      "1": 0,
      "2": 0,
      "3": 0,
    };

    const result = createInitialState(items);
    expect(result).toEqual(expectedState);
  });

  test("should handle duplicate values by keeping only the last occurrence", () => {
    const items: Option[] = [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "2", label: "Option 2 Duplicate" },
    ];

    const expectedState = {
      "1": 0,
      "2": 0,
    };

    const result = createInitialState(items);
    expect(result).toEqual(expectedState);
  });
});
