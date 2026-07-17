"use client";

import { useEffect } from "react";

export default function StarBackground() {
  useEffect(() => {
    const container = document.getElementById("star-container");

    if (!container) return;

    container.innerHTML = "";

    const totalStars = 120;

    for (let i = 0; i < totalStars; i++) {
      const star = document.createElement("div");

      star.className = "star";

      const size = Math.random() * 3 + 1;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      star.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(star);
    }
  }, []);

  return <div id="star-container"></div>;
}