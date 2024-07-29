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
