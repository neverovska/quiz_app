# Project
A simple quiz app built with React and Redux. 

## Figma Mockup
https://www.figma.com/design/pKA5WjF6c2mf1YxLStw4jE/quizApp?node-id=0-1&t=aIGX3z26c81txMtl-1

### Hw1
UI for Start page:
+ Number input for “number of questions”(from 5 to 15)
+ Select input for “category”
+ Select input for “difficulty”
+ Select input for “type”
+ Select input for “time” with values: 1m, 2m, 5m
+ “Start quiz” button
+ “See my stats” button

### Hw2
UI for Quiz page:
+ Question text
+ Progress bar (e.g. “question 3 out of 6)
+ “End quiz” button
+ Answer buttons (they could be “true” and “false” for true/false questions or they could be in a group of 4, for multiple option questions)
+ Timer element, which count down from specified value

### Hw3
UI for Finish page:
+ General result text
+ Result in numbers of correct answers. 
+ Quiz configuration, type, category, time and difficulty
+ Text indicating how much time user took to answer all the questions
+ A button “Restart” which will restart this same quiz with same configuration from the start
+ A button “Choose another quiz” which will navigate the user to quiz configuration screen

### Hw4
Navigation for app:
+ Upon pressing the “Start quiz” button from the first screen we navigate to the main quiz screen. (With mock data for now)
+ Upon pressing the “End quiz” button on the main quiz screen we should see a modal window with some text and 2 buttons - “Cancel” and “Confirm”.
+ Upon pressing “Cancel” button, we just close this modal window
+ Upon pressing “Confirm” button we need to navigate user back to configuration screen
+ After answering the last question or if timer ends on the main quiz screen, we need to navigate users to the result screen
+ On the result screen upon pressing the “Choose another quiz” button we need to navigate users to quiz configuration screen
+ On the result screen upon pressing the “Restart quiz” button we need to navigate users to main quiz screen and restart current quiz (with mock data for now)
+ On the configuration scream upon pressing the “See my statistics” button we need to navigate to the newly created empty statistics screen

### HW5  
Adding logic and state manager to the application:
+ Add Redux Toolkit to our dependencies
+ Upon choosing configuration we need to save this configuration to Redux store (slice) and send a request to Quiz API to get questions with answers before navigating to main quiz screen
+ After user finishes the quiz (by answering all the questions or running out of time) and we navigate him to quiz result screen, we should show quiz results, as described in Homework #3
+ After user presses “Choose another quiz” button on the result screen we need to clear questions data from Redux store (questions, answers and configuration) before navigating users to configuration screen
+ After user presses “Restart quiz” button we need to send one more API request to get new bunch of questions with same configuration (that we previously stored in Redux store) before navigating users to main quiz screen to restart the quiz with new questions
  
### HW6 
Additional logic for after users finish their quiz:
+ Add number of questions that user took in this quiz to overall number of questions user took
+ Add number of correct questions that this user got to overall number of correct questions for this user
+ Add the number of questions for each category that the user took in this quiz. For example if a user took 10 “Mythology” questions, we add 10 to overall number of “Mythology” questions
+ Add the number of questions for each difficulty that the user took in this quiz. For example if a user took 10 difficult questions, we add 10 to overall number of “Difficult” questions
+ Add the number of questions for each type of question that the user took in this quiz. For example if a user took 10 “True/false” questions, we add 10 to overall number of “True/false” questions
+ All this data has to be stored in the “Statistics” (or “stats”) slice, which we need to persist using the redux-persist library. Other slices do not need to be persisted

### HW7
Statistics screen:
+ Statistics of overall number of questions compared to correct number questions this user took
+ Statistics for each category with numbers
+ Statistics for each difficulty with numbers
+ Statistics for each type with numbers

