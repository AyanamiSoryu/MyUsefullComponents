import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

export default class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            input: '',
        };
    }

    componentDidMount() {
        this.makeRequest();
    }

    makeRequest = () => {
        axios.get(routes.tasksPath())
            .then((res) => {
                const tasks = res.data;
                this.setState({ tasks: tasks });
            });
    };

    onChange = (e) => {
        const { state } = this;
        // this.setState({ input: e.target.value });
        this.setState(update(state, { $merge: { input: `${e.target.value}` } }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { input, tasks } = this.state;
        if (input.length !== 0) {
            const task = { text: input };
            axios.post(routes.tasksPath(), task)
                .then((res) => {
                    const taskId = res.data.id;
                    this.setState({ input: '', tasks: [{ id: taskId, text: input, state: 'active' }, ...tasks] });
                });
        }
    };

    setTaskFinished = (id) => () => {
        const { tasks } = this.state;
        axios.patch(routes.finishTaskPath(id));
        // this.makeRequest();
        const newTasks = [];
        tasks.map((item) => {
            if (item.id === id) {
                newTasks.push({ id: item.id, text: item.text, state: 'finished' });
            } else {
                newTasks.push(item);
            }
            return null;
        });
        this.setState({ tasks: newTasks });
    };

    setTaskActive = (id) => () => {
        const { tasks } = this.state;
        axios.patch(routes.activateTaskPath(id));
        // this.makeRequest();
        const newTasks = [];
        tasks.map((item) => {
            if (item.id === id) {
                newTasks.push({ id: item.id, text: item.text, state: 'active' });
            } else {
                newTasks.push(item);
            }
            return null;
        });
        this.setState({ tasks: newTasks });
    };

    render() {
        const { tasks, input } = this.state;
        let columnNumber = 0;
        return (
            <div>
                <div className="mb-3">
                    <form className="todo-form mx-3" onSubmit={this.onSubmit}>
                        <div className="d-flex col-md-3">
                            <input
                                type="text"
                                value={input}
                                required=""
                                className="form-control me-3"
                                placeholder="I am going..."
                                onChange={this.onChange}
                            />
                            <button type="submit" className="btn btn-primary">add</button>
                        </div>
                    </form>
                </div>
                {tasks.length !== 0 && (
                    <>
                        {!!tasks.find((item) => item.state === 'active') && (
                            <div className="todo-active-tasks">
                                {tasks.map((item) => {
                                    if (item.state === 'active') {
                                        columnNumber += 1;
                                        return (
                                            <Item
                                                key={item.id}
                                                task={item}
                                                col={columnNumber}
                                                setFinished={this.setTaskFinished(item.id)}
                                            />
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        )}
                        {!!tasks.find((item) => item.state === 'finished') && (
                            <div className="todo-finished-tasks">
                                {tasks.map((item) => {
                                    if (item.state === 'finished') {
                                        columnNumber += 1;
                                        return (
                                            <Item
                                                key={item.id}
                                                task={item}
                                                col={columnNumber}
                                                setActive={this.setTaskActive(item.id)}
                                            />
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        )}
                    </>
                )}
            </div>
        );
    }
}
