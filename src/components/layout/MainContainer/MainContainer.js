import React from "react";
import PropTypes from "prop-types";

const MainContainer = ({ children }) => (
  <div className='mainContainer'>{children}</div>
);

MainContainer.propTypes = {
  children: PropTypes.node,
};

export default MainContainer;
