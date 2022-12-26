import { ReactNode } from "react";
//styles
import styles from "./NormalButton.module.scss";

interface Props {
  children: ReactNode;
  link?: string | null;
  handleClick?: (() => void) | null;
  size?: number;
}

const NormalButton = ({
  link = null,
  children,
  handleClick = null,
  size = 16,
}: Props) => {
  if (link) {
    return (
      <a href={link} target={"_blank"}>
        <button
          style={{
            fontSize: size,
          }}
          className={styles.normal_button}
        >
          {children}
        </button>
      </a>
    );
  } else {
    return (
      <button
        {...(handleClick && { onClick: handleClick })}
        className={styles.normal_button}
        style={{
          fontSize: size,
        }}
      >
        {children}
      </button>
    );
  }
};

export default NormalButton;
