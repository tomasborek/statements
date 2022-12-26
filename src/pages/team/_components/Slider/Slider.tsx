import { useEffect, useState } from "react";
import styles from "./Slider.module.scss";
import { motion } from "framer-motion";
import TeamMember from "../../../../components/TeamMember/TeamMember";
import { imageUrl } from "../../../../utils/helpers";
//interface
interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}
interface Props {
  members: TeamMember[];
}

export default function Slider({ members }: Props) {
  const [focus, setFocus] = useState<number>(0);
  const [vw, setVw] = useState<number>(0);
  useEffect(() => {
    setVw(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setVw(window.innerWidth);
  };
  return (
    <div className={`${styles.slider} green-gradient`}>
      <header>
        <h1>Tým Statements</h1>
      </header>
      {/* Team people */}
      <div className={`${styles.wrapper} main-container"`}>
        {/*Arrows for responsive team scrolling*/}

        <div className={styles.arrows}>
          <i
            onClick={() => {
              focus != 0 && setFocus((prevState) => prevState - 1);
            }}
            className={`fa-solid fa-chevron-left ${
              focus === 0 ? styles.disabled : ""
            }`}
          ></i>
          <i
            onClick={() => focus != 3 && setFocus((prev) => prev + 1)}
            className={`fa-solid fa-chevron-right  ${
              focus === 3 ? styles.disabled : ""
            }`}
          ></i>
        </div>

        {/*Scrolling*/}
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x:
              vw < 700
                ? focus === 0
                  ? (vw - 250) / 2
                  : focus === 1
                  ? (vw - 250) / 2 - 250
                  : focus === 2
                  ? (vw - 250) / 2 - 500
                  : focus === 3
                  ? (vw - 250) / 2 - 750
                  : 0
                : 0,
          }}
          transition={{ duration: 0.5 }}
          className={styles.people}
        >
          {members.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name.split(" ")[0]}
              img={imageUrl(member.image.asset._ref)}
              description={member.role}
              {...(vw < 700
                ? focus === index
                  ? { active: true }
                  : { off: true }
                : { resize: true })}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
