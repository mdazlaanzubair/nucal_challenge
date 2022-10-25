# Challenge

The coding challenge is to create a single-page app using Vue.js, Vuex for the frontend, and a back-end service. You are free to use Java or Nodejs for the back-end and vue-cli for creating an application. You could store data into memory or database at backend service. 


In this assignment, we would like you to create a simple task manager web application.
You will perform some operations on tasks and subtasks. You can find the details below.
We expect a cross-browser compatible and responsive web application that matching the requirements below. 
Also, we expect you to push the project code that you have prepared to the repository which we provided. Please keep the code challenge and your solution confidential! 

We will appreciate that if you add unit-tests and comments for your project (if applicable).
We expect you to write a README.md document about your implementation. It would be great for us to understand your approach since we will pass over your design, and your approach in the phone screen technical interview after your submission.

Please contact us if you require clarification or have any questions.

# Challenge Scenario - Task Board  

With this assignment, we want to create a board for our tasks. Tasks have "name", "state" and "level" properties that could be managed by users. Tasks could have below levels with the given priority order. 
- Blocker  
- Critical 
- High
- Low
The state could be "Open" or "Closed". 
Tasks could have subtasks. Subtasks have the same fields of tasks and parent task. 

## Structure 

- You could see application UI/UX designs <UPDATE IT>
- All mock screens reachable under the assignment-resources folder.
- Design proper Rest APIs for storing and listing tasks/subtasks


## Rules
 You could choose an intuitive way for not described points specifically.

### Creation Rules
- Task could be created with required fields name, state, and level. 
- Task name needs to be unique and max 25 characters.
- "Open" is the default value of the state.
- Level should be selected, with no default value.
- Subtask creation is enabled if the user selects/focuses on a task.
- Task could have 4 sub-task at most.
- Task could have no subtask.
- All tasks and subtasks should be stored. 

### List Rules
- There is a  task list with a priority order.
- Tasklist could be a query with level. 
- Tasks need to be sorted high to low priority by default.
- If two tasks have the same priority, the first created one has high priority.  
- Subtasks need to be sorted high to low priority under task.
- Lists need to be automatically updated if any task or subtask property is changed.
- Task and subtask cards have color depending on their priority. 
- List card layout needs to be responsive to the width of the page. 
- User could paginate lists. 

## Update Rules
 - Properties modal open with a task or subtask for updating.
 - Task name and parent tasks are shown as read-only not updatable.
 - Level field is updatable.
 - Tasks could not be closed if any subtask is still open.
 - If any subtask of a task is set to open, the task is set as open too.
 - If any task is deleted, all subtasks are also deleted.
  



# Technology Stack
- VueJs version2
- Vuex
- CSS3/SASS
- ES6+
- Mixins (If applicable)
- Use the related technologies for build configuration to create a production-ready bundle.
- Java 8+ or NodeJS 12+



### This repository is a property of Nucal that is prohibited to copy and share.
