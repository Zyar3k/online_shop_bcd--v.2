import { useHistory } from "react-router-dom";

import styles from "./ButtonBack.module.scss";

const Button = ({ children, onClick, disabled }) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <button className={styles.button} disabled={disabled} onClick={goBack}>
      Back
    </button>
  );
};

export default Button;
