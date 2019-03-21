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






export default connect(mapStateToProps, mapDispatchToProps)(MyTodos);