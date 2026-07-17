"use client";

import Link from "next/link";

interface BackButtonProps {
  href?: string;
}

export default function BackButton({
  href = "/dashboard",
}: BackButtonProps) {
  return (
    <Link
      href={href}
      className="back-button"
      aria-label="Volver al Dashboard"
    >
      <img
        src="/icons/back_icon.png"
        alt="Dashboard"
        className="back-button-icon"
      />
    </Link>
  );
}