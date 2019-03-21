import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchApi } from '../service';
import * as todosActions from '../actions/todos';
import Task from './task';

class MyTodos extends Component {
  componentDidMount() {
    const { setLoading, setTasks } = this.props;
    setLoading();
    fetchApi()
      .then(setTasks);
  }

  onAddTask = () => this.props.addTask(this.props.newName);

  onChangeName = ({ target }) => this.props.changeNewName(target.value);

  render() {
    let { isLoading, tasks, newName } = this.props;
    if (isLoading) return "LOADING ...";

    return (
      <div>
        <input type="text" value={newName} onChange={this.onChangeName} />
        <button onClick={this.onAddTask}>Add</button>
        <br />
        {tasks && tasks.length ? 
          <ul>
            {tasks.map(({ id, ...task }) => (
              <Task key={id} {...task} />
            ))}
          </ul>
          : 'Sin Tareas'
        }
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => ({
  newName: todos.newName,
  tasks: todos.tasks,
  isLoading: todos.isLoading
});

const mapDispatchToProps = dispatch => ({
  setLoading: () => dispatch(todosActions.setLoading()),
  setTasks: tasks => dispatch(todosActions.setTasks(tasks)),
  addTask: taskNewName => dispatch(todosActions.addTask(taskNewName)),
  changeNewName: text => dispatch(todosActions.changeNewName(text))
});


MyTodos.propTypes = {
  newName: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
};

MyTodos.defaultProps = {
  newName: '',
  tasks: [],
  isLoading: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTodos);