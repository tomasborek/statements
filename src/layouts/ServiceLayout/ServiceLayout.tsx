import { ReactNode } from "react";
//styles
import styles from "./ServiceLayout.module.scss";
//components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WhyUs from "../../components/WhyUs/WhyUs";
import TeamMember from "../../components/TeamMember/TeamMember";
import { imageUrl } from "../../utils/helpers";

interface ExpertProps {
  name: string;
  description: string;
  img: string;
}

interface BannerItem {
  icon?: string | null;
  title: string;
  description: string;
}

const ServiceLayout = ({ content }: any) => {
  const { title, description, banner, checkList, expert } = content;
  return (
    <>
      <main className={styles.info_layout}>
        <main className={`main-container`}>
          <section className={styles.intro}>
            <h1>{title}</h1>
            <p>{description}</p>
          </section>

          <section className={styles.banner_section}>
            <h2>{banner.title}</h2>
            <p>{banner.description}</p>
            <div className={styles.banner}>
              {banner.items.map((item: BannerItem, index: number) => (
                <BannerItem
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  key={index}
                />
              ))}
            </div>
          </section>
          {checkList && (
            <section className={styles.check_list_section}>
              <h2>{checkList.title}</h2>
              <ul>
                {checkList.items.map((item: string, index: number) => (
                  <Step key={index}>{item}</Step>
                ))}
              </ul>
              {checkList.description && (
                <p className={styles.description}>{checkList.description}</p>
              )}
            </section>
          )}
        </main>
        <div className="main-container">
          {expert && (
            <Expert
              name={expert.name}
              description={expert.role}
              img={imageUrl(expert.image.asset._ref)}
            />
          )}
          <WhyUs />
        </div>
      </main>
    </>
  );
};

const Expert = ({ name, description, img }: ExpertProps) => {
  return (
    <a href="/team">
      <section className={styles.expert}>
        <h2>Kdo vás projektem provede?</h2>
        <p>Klikněte na avatara člena týmu a dozvíte se více.</p>
        <div>
          <TeamMember name={name} description={description} img={img} active />
        </div>
      </section>
    </a>
  );
};

const BannerItem = ({ icon = null, title, description }: BannerItem) => {
  return (
    <div className={styles.item}>
      {icon && <i className={`${icon} green-shadow`}></i>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Step = ({ children }: { children: ReactNode }) => {
  return (
    <li>
      <i className="fas fa-angles-right green-shadow"></i>
      <p>{children}</p>
    </li>
  );
};

export default ServiceLayout;
