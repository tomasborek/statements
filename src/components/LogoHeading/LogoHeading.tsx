import { ReactNode } from "react";
//styles
import styles from "./LogoHeading.module.scss";

const LogoHeading = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.logo_heading}>
      <img src="/img/logo/osmicka.svg" alt="eight" />
      <h1>{children}</h1>
    </div>
  );
};

export default LogoHeading;
