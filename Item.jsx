import React from 'react';

export default class Item extends React.Component {
    render() {
        const { task, setFinished, setActive } = this.props;

        const taskRender = () => {
            if (task.state === 'active') {
                return (
                    <div className="row" key={task.id}>
                        <div className="col-1">{task.id}</div>
                        <div className="col">
                            <a href="#" className="todo-task" onClick={setFinished}>{task.text}</a>
                        </div>
                    </div>
                );
            }
            return (
                <div className="row" key={task.id}>
                    <div className="col-1">{task.id}</div>
                    <div className="col">
                        <s><a href="#" className="todo-task" onClick={setActive}>{task.text}</a></s>
                    </div>
                </div>
            );
        };

        return taskRender();
    }
}
