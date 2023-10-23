import { useState, type FC, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import styles from "./ChangingText.module.scss";

const TEXTS = ["design", "web", "app", "statement."];

const ChangingText = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < 3) {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        2000
      );
      return () => clearTimeout(intervalId);
    }
  }, [index]);

  return (
    <TextTransition springConfig={presets.gentle} style={{ display: "inline" }}>
      {TEXTS[index % TEXTS.length]}
    </TextTransition>
  );
};

export default ChangingText;
