import { useEffect, useState } from "react";
import type { FC } from "react";
import styles from "./Slider.module.scss";
import { motion } from "framer-motion";
import TeamMember from "../../../../components/TeamMember/TeamMember";

const Slider: FC = () => {
  const [focus, setFocus] = useState<number>(0);
  const [vw, setVw] = useState<number>(0);
  useEffect(() => {
    setVw(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => setVw(window.innerWidth);
  return (
    <div className={`${styles.slider} green-gradient`}>
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
              focus === 1 ? styles.disabled : ""
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
          <TeamMember
            name={"Tomáš"}
            img={"tomas.png"}
            description={"Vývojář"}
            {...(vw < 700
              ? focus === 0
                ? { active: true }
                : { off: true }
              : { resize: true })}
          />
          <TeamMember
            name={"Pavel"}
            img={"pavel.png"}
            description={"Marketér"}
            {...(vw < 700
              ? focus === 1
                ? { active: true }
                : { off: true }
              : { resize: true })}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
