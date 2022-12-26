import { useEffect, useRef } from "react";
//styles
import styles from "./Banner.module.scss";
//components
import GlowingButton from "../../../components/GlowingButton/GlowingButton";
import Logo from "../../../components/Logo/Logo";
import { useVideoFallback } from "../../../hooks/hooks";

const Banner = ({ data }: any) => {
  const video = useRef<any>(null);
  const videoError = useVideoFallback(video);
  useEffect(() => {}, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    const videoRef = video.current;

    videoRef
      ? (videoRef.style.transform = `translateY(${offset * 0.5}px)`)
      : "";
  };

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo width={"100%"} glowing opacity={100} />
        </div>
        <h1>{data.mainHeading}</h1>
        <h3>{data.subHeading}</h3>
        <GlowingButton
          handleClick={() => {
            const services = document.querySelector(".services");
            if (services) services.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Služby
        </GlowingButton>
      </div>
      <div
        className={`transparent-green-gradient ${styles.green_overlay}`}
      ></div>
      <div className={styles.black_overlay}></div>
      {videoError ? (
        <img
          ref={video}
          src="/img/planeta_placeholder.png"
          className={styles.planet}
          alt="Planeta"
        />
      ) : (
        <video
          autoPlay
          muted
          playsInline
          loop
          ref={video}
          className={styles.planet}
          src="/video/planeta.mp4"
        />
      )}
    </div>
  );
};

export default Banner;
