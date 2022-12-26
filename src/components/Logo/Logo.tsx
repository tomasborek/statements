import React, { useEffect, useRef, useState } from "react";
import { useVideoFallback } from "../../hooks/hooks";
//styles
import styles from "./Logo.module.scss";

interface Props {
  width?: number | string;
  opacity?: number;
  absolute?: boolean;
  center?: boolean;
  z?: number;
  glowing?: boolean;
}

const Logo = ({
  width = 300,
  opacity = 40,
  absolute = false,
  center = false,
  z = 20,
  glowing = false,
}: Props) => {
  const video = useRef<any>(null);
  const videoError = useVideoFallback(video);
  if (glowing && !videoError) {
    return (
      <video
        ref={video}
        autoPlay
        muted
        loop
        className={`${styles.logo} ${absolute ? styles.absolute : ""} ${
          center ? styles.center : ""
        }`}
        style={{
          opacity: opacity,
          zIndex: z,
        }}
      >
        <source src="/img/logo/osmicka.webm" type="video/webm" />
      </video>
    );
  } else {
    return (
      <img
        draggable={"false"}
        src="/img/logo/osmicka.svg"
        alt="eight"
        className={`${styles.logo} ${absolute ? "absolute" : ""} ${
          center ? styles.center : ""
        }`}
        style={{
          opacity: opacity,
          zIndex: z,
          maxWidth: width,
        }}
      />
    );
  }
};

export default Logo;
