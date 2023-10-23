import React from "react";
//styles
import styles from "./WhyUs.module.scss";
//components
import NormalButton from "../NormalButton/NormalButton";

const WhyUs = () => {
  return (
    <section className={styles.why_us}>
      <h2>Proč zrovna Statements?</h2>
      <p>
        Víme, jaké to je stát na začátku a mít vize a cíle. Proto s vámi budeme
        vždy jednat přátelsky a otevřeně. Máme zkušenosti s malými i velkými
        projekty, přičemž každý z nich byl jiný a unikátní. Design a vývoj je
        naší vášní, a proto se všem detailům věnujeme s citem. Jsme mladý tým s
        moderním a trendy přístupem, neustále v kroku s online světem.
        Náročnější výzvy konzultujeme s experty napříč celým profesním polem.
        Dejte nám šanci a rádi si nezávazně popovídáme o vašich ambicích a
        cílech.
      </p>
      <div className={styles.actions}>
        <a href="/kontakt">
          <div>
            <NormalButton>Spojte se s námi</NormalButton>
          </div>
        </a>
      </div>
    </section>
  );
};

export default WhyUs;
