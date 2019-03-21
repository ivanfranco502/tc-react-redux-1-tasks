import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchApi } from '../../service';
import * as todosActions from '../../actions/todos';
import Task from '../task';

// Presentacion

const Todos = () => (
  <div>
    [TODOS]
  </div>
);


Todos.propTypes = {

};

Todos.defaultProps = {
  
};

export default Todos;