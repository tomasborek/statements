//styles
import styles from "./TeamMember.module.scss";

interface Props {
  name: string;
  description: string;
  img: string;
  resize?: boolean;
  active?: boolean;
  off?: boolean;
}

const TeamMember = ({
  name,
  description,
  img,
  resize = false,
  active = false,
  off = false,
}: Props) => {
  return (
    <div
      className={`${styles.team_member} ${resize ? styles.allow_resize : ""} ${
        active ? styles.active : off ? styles.off : ""
      }`}
    >
      <header>
        <h3>{name}</h3>
        <p>{description}</p>
      </header>

      <div className={styles.person}>
        <img
          draggable={"false"}
          src={img}
          className={styles.avatar}
          alt={name}
        />
        <img
          draggable={"false"}
          src="/img/team/hologram.png"
          className={styles.holo}
          alt={"Hologram"}
        />
      </div>
    </div>
  );
};

export default TeamMember;
