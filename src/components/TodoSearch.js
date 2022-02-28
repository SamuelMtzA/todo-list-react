import React from "react";
import PropTypes from 'prop-types'
import '../styles/TodoSearch.css'

export const TodoSearch = ({ id, placeholder, type }) => {
  return (
    <label>
      <input className="todo-search" id={id} placeholder={placeholder} type={type} />
    </label>
  );
};

TodoSearch.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

