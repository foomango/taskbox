import React from 'react';
import PropTypes from 'prop-types';

export default class Task extends React.Component {
    render() {
        const { task, onArchiveTask, onPinTask } = this.props;
        const { id, title, state } = task;

        return (
            <div className={`list-item ${state}`}>
                <label className="checkbox">
                    <input
                        type="checkbox"
                        defaultChecked={state === 'TASK_ARCHIVED'}
                        disabled={true}
                        name="checked"
                    />
                    <span className="checkbox-custom" onClick={() => onArchiveTask(id)}></span>
                </label>
                <div className="title">
                    <input type="text" value={title} readOnly={true} placeholder="Input title" />
                </div>
                <div className="actions" onClick={event => event.stopPropagation()}>
                    {state !== 'TASK_ARCHIVED' && (
                        <a onClick={() => onPinTask(id)}>
                            <span className={`icon-star`}></span>
                        </a>
                    )}
                </div>
            </div>
        );
    }
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func
};