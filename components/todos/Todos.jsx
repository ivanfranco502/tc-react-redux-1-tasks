import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Task from '../task';

// Presentacion

class Todos extends Component {

  onAddTask = () => this.props.addTask(this.props.newName);

  onChangeName = ({ target }) => this.props.changeNewName(target.value);

  render(){
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
};


Todos.propTypes = {
  newName: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired,
  changeNewName: PropTypes.func.isRequired,
};

Todos.defaultProps = {
  newName: '',
  tasks: [],
  isLoading: false,
};

export default Todos;