'use client';

import { useEffect, useState, useRef } from "react";
import styles from './styles/BackgroundImage.module.css';
import Image from 'next/image';

export default function BackgroundImage({bg}: any) {
  const [brightness, setBrightness] = useState(0.7);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll.current) {
        // scrolling down → darker
        setBrightness(0.3);
      } else {
        // scrolling up → brighter
        setBrightness(0.8);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Image
      src={bg}
      alt='Background image'
      className={styles.blur}
      style={{
        filter: `brightness(${brightness}) blur(27px)`,
        transition: "filter 1s ease",
        width: "100%",
      }}
    />
  );
}