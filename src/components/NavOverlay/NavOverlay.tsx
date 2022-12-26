//styles
import styles from "./NavOverlay.module.scss";
//store
import { useStore } from "@nanostores/react";
import { isNavOpen } from "../../store/NavStore";
interface ItemProps {
  icon: string;
  content: string;
  link: string;
}
const NavOverlay = () => {
  const $isNavOpen = useStore(isNavOpen);
  return (
    <div className={`${styles.nav_overlay} ${$isNavOpen ? styles.open : ""}`}>
      <div className={`green-gradient ${styles.green_overlay}`}></div>
      <nav>
        <ul>
          <NavItem icon={"phone"} content={"Kontakt"} link="/kontakt" />
          <NavItem icon={"users"} content={"Tým"} link="/team" />
          <NavItem icon={"folder"} content={"Portfolio"} link="/portfolio" />
          <NavItem icon={"globe"} content={"Chci web"} link="/web" />
        </ul>
      </nav>
    </div>
  );
};

const NavItem = ({ icon, content, link }: ItemProps) => {
  return (
    <li onClick={() => isNavOpen.set(false)}>
      <a href={link}>
        <div className={styles.icon}>
          <i className={`fas fa-${icon}`}></i>
        </div>
        <p>{content}</p>
      </a>
    </li>
  );
};

export default NavOverlay;
