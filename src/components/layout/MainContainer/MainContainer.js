import React from "react";
import PropTypes from "prop-types";

import styles from "./MainContainer.module.scss";

const MainContainer = ({ children }) => (
  <div className={styles.mainContainer}>{children}</div>
);

MainContainer.propTypes = {
  children: PropTypes.node,
};

export default MainContainer;
