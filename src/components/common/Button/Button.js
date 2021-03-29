import styles from "./Button.module.scss";

const Button = ({ children, onClick, disabled, type }) => {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
