import PropTypes from 'prop-types';
import React from "react";
import { setTechnology } from './action';
import store from './store';
import '../App.css';

const ButtonGroup = props => (
  <div>
    {props.technologies.map((technology, index) => (
      <button
        key={`btn-${index}`}
        className="hello-btn"
        data-technology={technology}
        onClick={dispatchButtonAction}
      >
        {technology}
      </button>
    ))}
  </div>
);

ButtonGroup.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired
};

function dispatchButtonAction(event) {
  const technology = event.target.dataset.technology;
  store.dispatch(setTechnology(technology));
}

export default ButtonGroup;