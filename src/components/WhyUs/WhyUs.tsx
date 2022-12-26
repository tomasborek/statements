import React from "react";
//styles
import styles from "./WhyUs.module.scss";
//components
import NormalButton from "../NormalButton/NormalButton";

const WhyUs = () => {
  return (
    <section className={styles.why_us}>
      <h2>Proč zrovna statements?</h2>
      <p>
        Víme, jaké to je, stát v krušných začátcích a tvrdě pracovat na svých
        cílech. Náš přístup není v žádném případě korporátní a cokoliv s Vámi
        rádi probereme v naprosto přátelské rovině. Máme zkušenosti jak z
        větších, tak i menších firem, přičemž většina z nich měla svůj unikátní
        záměr. Naše práce je zároveň i náš koníček, proto se vše snažíme
        dotáhnout do detailu a hlavně tak, abyste Vy byli maximálně spokojeni.
        Jsme mladí lidé a na vše se díváme moderním a trendy stylem - z on-line
        světa nám nic neunikne! S náročnějšími problémy se radíme s experty
        napříč celým profesním polem. Zkuste nám dát šanci a můžeme si společně
        a nezavázně promluvit o Vašich ambicích a cílech. <br /> <br /> Budeme
        se moc těšit.
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
