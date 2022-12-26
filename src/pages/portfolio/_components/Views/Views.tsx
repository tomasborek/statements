import { useEffect, useState } from "react";
//styles
import styles from "./Views.module.scss";
import { imageUrl } from "../../../../utils/helpers";
//interfaces
interface Reference {
  title: string;
  description: string;
  link: string;
  logo: {
    asset: {
      _ref: string;
    };
  };
}
interface ReferenceProps {
  title: string;
  description: string;
  link: string;
  img: string;
}

interface DesignReference {
  category:
    | "Propagační materiály"
    | "On-line design"
    | "Produktové obaly"
    | "Vizuální identita";
  image: {
    asset: {
      _ref: string;
    };
  };
}
interface Props {
  references: Reference[];
  designReferences: DesignReference[];
}

export default function Views({ references, designReferences }: Props) {
  const [view, setView] = useState<"web" | "design">("web");
  const designCategories = [
    ...new Set(
      designReferences.map((reference: DesignReference) => reference.category)
    ),
  ];

  return (
    <div className={styles.views}>
      <div className={styles.buttons}>
        <button
          onClick={() => setView("web")}
          className={view === "web" ? styles.active : ""}
        >
          Web & marketing
        </button>
        <button
          onClick={() => setView("design")}
          className={view === "design" ? styles.active : ""}
        >
          Grafický design
        </button>
      </div>
      {view === "web" ? (
        <div className={styles.references_list}>
          {references.map((reference, index) => (
            <Reference
              title={reference.title}
              img={imageUrl(reference.logo.asset._ref)}
              description={reference.description}
              link={reference.link}
              key={index}
            />
          ))}
        </div>
      ) : (
        <div className={styles.design_references}>
          {designCategories.map((category: string, index: number) => (
            <section key={index}>
              <h2>{category}</h2>
              <div className={styles.list}>
                {designReferences.map((reference, index) => (
                  <>
                    {reference.category === category && (
                      <div className={styles.item}>
                        <img
                          src={imageUrl(reference.image.asset?._ref)}
                          alt={reference.category}
                        />
                      </div>
                    )}
                  </>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

const Reference = ({ title, img, description, link }: ReferenceProps) => {
  return (
    <a
      className={styles.item}
      href={link ? link : "/portfolio"}
      {...(link && { target: "_blank" })}
    >
      <div className={styles.overlay}></div>
      <img src={img} alt={title} />
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};
