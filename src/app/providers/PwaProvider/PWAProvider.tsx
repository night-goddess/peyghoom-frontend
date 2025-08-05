"use client";
import { useEffect } from "react";

const PWAProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
    console.log(registration);
  }

  return children;
};

export default PWAProvider;
