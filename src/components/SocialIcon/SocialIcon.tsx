//styles
import styles from "./SocialIcon.module.scss";

interface Props {
  icon: string;
  size: number;
  glowy?: boolean;
  link: string;
}

const SocialIcon = ({ icon, size, glowy = false, link }: Props) => {
  return (
    <a href={link} target={"_blank"}>
      <i
        className={`fab fa-${icon} ${styles.social_icon} cursor-pointer ${
          glowy ? `${styles.glowy} green-shadow` : ""
        } `}
        style={{
          fontSize: size,
        }}
      ></i>
    </a>
  );
};

export default SocialIcon;
