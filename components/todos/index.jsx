import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as todosActions from '../../actions/todos';
import { fetchApi } from '../../service';
import Todos from './Todos';

// Contenedor

class MyTodosContainer extends Component {
  componentDidMount() {
    const { setLoading, setTasks } = this.props;
    setLoading();
    fetchApi()
      .then(setTasks);
  }

  render() {
    const {
      tasks,
      newName,
      addTask, 
      changeNewName, 
      onChangeName, 
      isLoading
    } = this.props;
    return (
      <Todos
        tasks = {tasks}
        newName = {newName}
        addTask = {addTask}
        changeNewName = {changeNewName}
        isLoading = {isLoading}
      />);
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

export default connect(mapStateToProps, mapDispatchToProps)(MyTodosContainer);