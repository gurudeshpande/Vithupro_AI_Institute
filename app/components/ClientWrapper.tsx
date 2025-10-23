"use client";

import { useState, useEffect } from "react";
import Preloader from "./Preloader";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader />
      <div className={isLoading ? "overflow-hidden h-screen" : ""}>
        {children}
      </div>
    </>
  );
}
