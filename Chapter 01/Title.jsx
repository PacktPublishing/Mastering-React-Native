import React, { PropTypes } from 'react';

const Title = (props) => (
  <h1
    style={{
      backgroundColor: props.highlighted ? 'yellow' : 'white',
      fontSize: `${props.fontSize}px`
    }}
  >
    {props.children}
  </h1>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  highlighted: PropTypes.bool,
  fontSize: PropTypes.number
};
Title.defaultProps = {
  highlighted: false,
  fontSize: 18
};

export default Title;
