import { useState, type FC, useEffect } from "react";
import TextTransition from "react-text-transition";

const TEXTS = ["design", "web", "app", "statement."];

const ChangingText: FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
    if (index < 3) {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        2000
      );
      return () => clearTimeout(intervalId);
    }
  }, [index]);

  if(!loaded) return null;
  return (
    <div>
      <TextTransition>{TEXTS[index % TEXTS.length]}</TextTransition>
    </div>
  );
};

export default ChangingText;
