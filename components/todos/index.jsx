import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Todos from './Todos';

// Contenedor

class MyTodosContainer extends Component {
  render() {
    return (<Todos />);
  }
}

const mapStateToProps = ({ todos }) => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(MyTodosContainer);