"use client";

import { useEffect } from "react";
import { FanArt } from "@/lib/gallery/fanarts";

interface FanArtModalProps {
  fanArt: FanArt;
  onClose: () => void;
}

export default function FanArtModal({
  fanArt,
  onClose,
}: FanArtModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fanart-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Fan-Art de ${fanArt.character}`}
    >
      <div
        className="fanart-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="fanart-modal-close"
          onClick={onClose}
          type="button"
          aria-label="Cerrar Fan-Art"
        >
          ×
        </button>

        <div className="fanart-modal-image-wrapper">
          <img
            src={fanArt.image}
            alt={`Fan-Art de ${fanArt.character}`}
            className="fanart-modal-image"
          />
        </div>

        <div className="fanart-modal-info">
          <h2>{fanArt.character}</h2>

          {fanArt.alias && (
            <p className="fanart-modal-alias">
              {fanArt.alias}
            </p>
          )}

          <p className="fanart-modal-artist">
            Fan-Art por{" "}
            <strong>{fanArt.artist}</strong>

            {fanArt.artistHandle && (
              <span> @{fanArt.artistHandle}</span>
            )}
          </p>

          <a
            href={fanArt.image}
            download={`${fanArt.id}-fanart`}
            className="fanart-download-button"
          >
            ⬇ Descargar Fan-Art
          </a>
        </div>
      </div>
    </div>
  );
}