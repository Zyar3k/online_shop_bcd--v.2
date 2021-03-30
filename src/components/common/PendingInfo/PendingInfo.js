import styles from "./PendingInfo.module.scss";

const PendingInfo = ({ children }) => {
  return (
    <div>
      <h3 className={styles.pendingInfo}>{children}</h3>
    </div>
  );
};

export default PendingInfo;
