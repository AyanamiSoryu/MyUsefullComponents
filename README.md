# MyUsefullComponents
This is a repository for my latest project, which is an application that helps people track their fitness goals.
It's built with React on the frontend and Node.js on the backend. The app allows users to log their workouts, set goals, and track their progress over time.



This is a React component called TodoBox that allows a user to create a to-do list.
It imports axios and update from the npm packages to make HTTP requests and update the state, respectively.
It also imports another component called Item from a file called Item.jsx.

In the constructor, it sets the initial state with an empty array of tasks and an empty input string.
When the component mounts, it makes a GET request to the server to get the list of tasks.

There are also methods to handle changes to the input field and submission of the form, which makes a POST request to add a new task to the list.

There are also methods to handle marking a task as finished or active, which makes a PATCH request to update the status of the task on the server.
These methods update the state of the component accordingly.

In the render method, it displays the form for creating a new task and conditionally displays the active and finished tasks as separate columns if there are any.
Each task is displayed using the Item component, which receives the task information, column number, and a callback function to set the task as finished or active.
