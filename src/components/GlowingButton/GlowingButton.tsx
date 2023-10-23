import type { FC } from "react";
import styles from "./GlowingButton.module.scss";

interface Props {
  children: React.ReactNode;
  link?: string | null;
  handleClick?: (() => void) | null;
}

const GlowingButton: FC<Props> = ({
  children,
  link = null,
  handleClick = null,
}) => {
  if (link) {
    return (
      <a href={link}>
        <button className={styles.glowing_button}>
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
        <p>{children}</p>
      </button>
    );
  }
};

export default GlowingButton;
