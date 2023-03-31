# MyUsefullComponents
This is a repository for my latest project, which is an application that helps people track their fitness goals.
It's built with React on the frontend and Node.js on the backend. The app allows users to log their workouts, set goals, and track their progress over time.

# TodoBox

This is a React component called TodoBox that allows a user to create a to-do list. It imports axios and update from the npm packages to make HTTP requests and update the state, respectively. It also imports another component called Item from a file called Item.jsx.

In the constructor, it sets the initial state with an empty array of tasks and an empty input string. When the component mounts, it makes a GET request to the server to get the list of tasks.

There are also methods to handle changes to the input field and submission of the form, which makes a POST request to add a new task to the list.

There are also methods to handle marking a task as finished or active, which makes a PATCH request to update the status of the task on the server. These methods update the state of the component accordingly.

In the render method, it displays the form for creating a new task and conditionally displays the active and finished tasks as separate columns if there are any. Each task is displayed using the Item component, which receives the task information, column number, and a callback function to set the task as finished or active.


# React TodoBox Component
This is a TodoBox component built using React. It provides a simple interface for creating and managing a list of tasks.

## Features
- Add tasks by typing in the input field and pressing the "add" button.
- Finish a task by clicking on its checkbox. Finished tasks will move to the bottom of the list.
- Activate a finished task by clicking on its checkbox again. Active tasks will move to the top of the list.
- Tasks are persisted using Axios and a RESTful API.
## Usage
To use this component, simply import it into your React application and add it to your desired page.

```javascript
import TodoBox from './TodoBox';

function App() {
  return (
    <div>
      <TodoBox />
    </div>
  );
}
```

## Dependencies
- axios: ^0.24.0
- immutability-helper: ^3.1.1
- react: ^17.0.2
- react-dom: ^17.0.2
- react-scripts: 4.0.3
## Installation
To install this component, clone this repository and run **`npm install`** to install the dependencies.

```bash
git clone https://github.com/yourusername/your-repository.git
cd your-repository
npm install
```
## Development
To run this component in development mode, use the **`npm start`** command. This will start a local development server at **[http://localhost:3000](http://localhost:3000)**.

```bash
npm start
```
## Production
To build this component for production use, use the `npm run build` command. This will create a production-ready build in the `build` directory.

```bash
npm run build
```
