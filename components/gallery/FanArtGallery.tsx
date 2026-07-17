"use client";

import { useState } from "react";
import { fanArts, FanArt } from "@/lib/gallery/fanarts";
import FanArtModal from "./FanArtModal";

export default function FanArtGallery() {
  const [selectedFanArt, setSelectedFanArt] =
    useState<FanArt | null>(null);

  const duplicatedFanArts = [...fanArts, ...fanArts];

  return (
    <section className="fanart-gallery">
      <div className="fanart-gallery-header">
        <span className="fanart-header-icon">🎨</span>

        <h1>Fan-Arts</h1>

        <p>
          Una colección de arte creado por artistas que dieron vida a
          los personajes de Skullgirls desde su propia perspectiva.
        </p>
      </div>

      <div className="fanart-carousel">
        <div className="fanart-carousel-track">
          {duplicatedFanArts.map((fanArt, index) => (
            <article
              key={`${fanArt.id}-${index}`}
              className="fanart-card"
              onClick={() => setSelectedFanArt(fanArt)}
            >
              <div className="fanart-card-image-wrapper">
                <img
                  src={fanArt.image}
                  alt={`Fan-Art de ${fanArt.character}`}
                  className="fanart-card-image"
                />
              </div>

              <div className="fanart-card-info">
                <h3 className="fanart-card-character">
                  {fanArt.character}
                </h3>

                <p className="fanart-card-creator">
                  {fanArt.artist}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedFanArt && (
        <FanArtModal
          fanArt={selectedFanArt}
          onClose={() => setSelectedFanArt(null)}
        />
      )}
    </section>
  );
}