import { useState } from "react";
import styles from "./Technologies.module.scss";
interface Technology {
  name: string;
  logo: string;
}

const Technologies = () => {
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
            <Technology title={"React"} image={"/dev/react-logo.png"} />
            <Technology title={"Next"} image={"/dev/nextjs-logo.png"} />
            <Technology title={"Typescript"} image={"/dev/ts-logo.png"} />
            <Technology title={"Netlify"} image={"/dev/netlify-logo.png"} />
            <Technology title={"Git"} image={"/dev/git-logo.png"} />
            <Technology title={"Node.js"} image={"/dev/nodejs-logo.png"} />
            <Technology title={"Sanity"} image={"/dev/sanity-logo.png"} />
            <Technology title={"Tailwind"} image={"/dev/tailwind-logo.png"} />
            <Technology title={"Postgres"} image={"/dev/postgres-logo.png"} />
            <Technology title={"WooComerce"} image={"/dev/woo-logo.png"} />
            <Technology title={"Google cloud"} image={"/dev/cloud-logo.png"} />
            <Technology title={"Wordpress"} image={"/dev/wp-logo.png"} />
          </>
        ) : (
          <>
            <Technology title={"Figma"} image={"/marketing/figma-logo.png"} />
            <Technology
              title={"Google Analytics"}
              image={"/marketing/ga-logo.png"}
            />
            <Technology title={"Photoshop"} image={"/marketing/ps-logo.png"} />
            <Technology
              title={"Illustrator"}
              image={"/marketing/ai-logo.png"}
            />
            <Technology
              title={"Adobe Cloud"}
              image={"/marketing/adobe-logo.png"}
            />
            <Technology
              title={"Meta Suite"}
              image={"/marketing/meta-logo.png"}
            />
            <Technology title={"Asana"} image={"/marketing/asana-logo.png"} />
            <Technology title={"Eco Mail"} image={"/marketing/ecm-logo.png"} />
            <Technology title={"Fl Studio"} image={"/marketing/fl-logo.png"} />
            <Technology
              title={"Similiar Web"}
              image={"/marketing/sw-logo.png"}
            />
            <Technology
              title={"Google suite"}
              image={"/marketing/google-logo.png"}
            />
            <Technology
              title={"After Effects"}
              image={"/marketing/ae-logo.png"}
            />
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
      <img src={`/img/tech/${image}`} alt={title} />
    </div>
    <p className="text-center">{title}</p>
  </div>
);
