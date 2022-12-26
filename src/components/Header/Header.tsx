import styles from "./Header.module.scss";
//components
import { Sling as Hamburger } from "hamburger-react";
//store
import { useStore } from "@nanostores/react";
import { isNavOpen } from "../../store/NavStore";

const Header = ({ absolute = false }: { absolute?: boolean }) => {
  const $isNavOpen = useStore(isNavOpen);

  return (
    <header className={`${styles.header} ${absolute ? styles.absolute : ""}`}>
      <div className={`${styles.inner_header} main-container`}>
        <div className={styles.hamburger}>
          <Hamburger
            toggle={() => isNavOpen.set(!$isNavOpen)}
            toggled={$isNavOpen}
            rounded
          />
        </div>
        <a href="/">
          <h2>statements</h2>
        </a>
      </div>
    </header>
  );
};

export default Header;
