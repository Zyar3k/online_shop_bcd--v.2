import styles from "./PageTitle.module.scss";

const PageTitle = ({ children }) => {
  return <h1 className={styles.pageTitle}>{children}</h1>;
};

export default PageTitle;
