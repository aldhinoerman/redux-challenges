import React from "react";
import PropTypes from 'prop-types';

const HelloWorld = ({technology}) => {
  return (
    <div className="hello-world">
      Hello World <span className="hello-world__tech">{technology}!</span>
    </div>
  );
};

HelloWorld.propTypes = {
  technology: PropTypes.string.isRequired
};

export default HelloWorld;