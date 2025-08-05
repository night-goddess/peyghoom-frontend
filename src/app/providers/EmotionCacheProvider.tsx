"use client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ReactNode } from "react";

const cacheRtl = createCache({
  key: "test",
  prepend: true,
});
const EmotionCacheProvider = ({ children }: { children: ReactNode }) => {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export default EmotionCacheProvider;
