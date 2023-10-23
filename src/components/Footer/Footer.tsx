//styles
import styles from "./Footer.module.scss";
//components
import SocialIcon from "../SocialIcon/SocialIcon";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`main-container ${styles.inner_footer}`}>
        <h2>STATEMENTS</h2>
        <main>
          <section>
            <h3>O statements</h3>
            <p className="text-sm text-proseText">
              Jsme mladý tým zabývající se (nejen) digitálním marketingem a
              vývojem webů. Vytváříme webové aplikace a projekty, které mají
              smysl. Na vše se díváme moderním a trendy stylem, z online světa
              nám nic neunikne. Vize jsou nekonečné, pojďte je s námi naplnit.
            </p>
          </section>
          <section>
            <h3>Navigace</h3>
            <ul>
              <li>
                <a href="/team">Tým</a>
              </li>
              <li>
                <a href="/kontakt">Kontakt</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
            </ul>
          </section>
          <section>
            <h3>Spojte se s námi</h3>
            <div className={styles.social_media}>
              <SocialIcon
                icon="instagram"
                size={20}
                link={"https://www.instagram.com/statements.cz/"}
              />
              <SocialIcon
                link={"https://www.linkedin.com/company/86135628"}
                icon="linkedin"
                size={20}
              />
            </div>
            <div className={styles.contact_item}>
              <i className="fas fa-phone"></i>
              <p>(+420) 737 951 560</p>
            </div>
            <div className={styles.contact_item}>
              <i className="fas fa-envelope"></i>
              <p>info@statements.cz</p>
            </div>
          </section>
        </main>
        <div className={styles.signature}>
          <p>Statements 2023 &copy; Všechna práva vyhrazena</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
