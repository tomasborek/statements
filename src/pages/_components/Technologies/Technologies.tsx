import { useState } from "react";
//styles
import styles from "./Technologies.module.scss";
import { imageUrl } from "../../../utils/helpers";
//interfaces
interface Technology {
  name: string;
  logo: any;
}

const Technologies = ({
  devTech,
  marketingTech,
}: {
  devTech: Technology[];
  marketingTech: Technology[];
}) => {
  const [view, setView] = useState<string>("dev");
  return (
    <section className={styles.technologies}>
      <h2>Technologie, které používáme</h2>
      <div className={styles.options}>
        <button
          className={`${view === "dev" ? styles.active : ""}`}
          onClick={() => setView("dev")}
        >
          Development
        </button>
        <button
          className={`${view === "marketing" ? styles.active : ""}`}
          onClick={() => setView("marketing")}
        >
          Marketing a design
        </button>
      </div>

      <div className={styles.technologies_list}>
        {view === "dev" ? (
          <>
            {devTech.map((tech: Technology, index: number) => (
              <Technology
                key={index}
                title={tech.name}
                image={tech.logo.asset._ref}
              />
            ))}
          </>
        ) : (
          <>
            {marketingTech.map((tech: Technology, index: number) => (
              <Technology
                key={index}
                title={tech.name}
                image={tech.logo.asset._ref}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Technologies;

const Technology = ({ image, title }: { image: string; title: string }) => (
  <div className={styles.item}>
    <div className={styles.image}>
      <img src={imageUrl(image)} alt={title} />
    </div>
    <p className="text-center">{title}</p>
  </div>
);
