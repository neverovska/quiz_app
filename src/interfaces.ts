import { Option } from "./redux/slices/configurationSlice";

export interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface SelectProps {
  title: string;
  options: Option[];
  value: string | undefined;

  handler: (option: Option, title: string) => void;
}
