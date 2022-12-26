import { ReactNode } from "react";
//styles
import styles from "./GlowingButton.module.scss";

interface Props {
  children: ReactNode;
  link?: string | null;
  handleClick?: (() => void) | null;
}

const GlowingButton = ({
  children,
  link = null,
  handleClick = null,
}: Props) => {
  if (link) {
    return (
      <a href={link}>
        <button className={styles.glowing_button}>
          <div className={styles.overlay}></div>
          <p>{children}</p>
        </button>
      </a>
    );
  } else {
    return (
      <button
        {...(handleClick ? { onClick: handleClick } : "")}
        className={styles.glowing_button}
      >
        <div className={styles.overlay}></div>
        <p>{children}</p>
      </button>
    );
  }
};

export default GlowingButton;
