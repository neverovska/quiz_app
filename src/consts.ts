import { Option } from "./redux/slices/configurationSlice";

const TIMES: Option[] = [
  { value: "60", label: "1 min" },
  { value: "120", label: "2 min" },
  { value: "300", label: "5 min" },
];

const DIFFICULTIES: Option[] = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];


// TODO: fetch questions from api

const CATEGORIES: Option[] = [
  { value: "9", label: "General Knowledge" },
  { value: "10", label: "Entertainment: Books" },
  {
      value: "11",
      label: "Entertainment: Film",
  },
  { value: "12", label: "Entertainment: Music" },
  { value: "13", label: "Entertainment: Musicals & Theatres" },
  {
      value: "14",
      label: "Entertainment: Television",
  },
  { value: "15", label: "Entertainment: Video Games" },
  { value: "16", label: "Entertainment: Board Games" },
  {
      value: "17",
      label: "Science & Nature",
  },
  { value: "18", label: "Science: Computers" },
  { value: "19", label: "Science: Mathematics" },
  {
      value: "20",
      label: "Mythology",
  },
  { value: "21", label: "Sports" },
  { value: "22", label: "Geography" },
  { value: "23", label: "History" },
  {
      value: "24",
      label: "Politics",
  },
  { value: "25", label: "Art" },
  { value: "26", label: "Celebrities" },
  { value: "27", label: "Animals" },
  {
      value: "28",
      label: "Vehicles",
  },
  { value: "29", label: "Entertainment: Comics" },
  { value: "30", label: "Science: Gadgets" },
  {
      value: "31",
      label: "Entertainment: Japanese Anime & Manga",
  },
  { value: "32", label: "Entertainment: Cartoon & Animations" },
];

const TYPES: Option[] = [
  { value: "multiple", label: "Multiple choice" },
  { value: "boolean", label: "True/False" },
];

export { TIMES, DIFFICULTIES, CATEGORIES, TYPES };
