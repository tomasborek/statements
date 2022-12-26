import { useEffect, useState } from "react";
export const useVideoFallback = (video: any) => {
  const [videoError, setVideoError] = useState<boolean>(false);
  useEffect(() => {
    if (video.current) {
      video.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, []);
  return videoError;
};
