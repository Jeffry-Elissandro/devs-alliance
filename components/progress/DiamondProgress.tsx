"use client";

import { useEffect, useRef, useState } from "react";

import { data } from "@/lib/progress/data";
import { getProgressData } from "@/lib/progress/logic";

export default function DiamondProgress() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [started, setStarted] = useState(false);

  const progress = getProgressData(data.score_actual);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setStarted(true);

        observer.unobserve(section);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`diamond-progress ${
        started ? "diamond-progress--started" : ""
      }`}
      data-state={progress.state}
    >
      <div className="diamond-progress-content">

        <div className="diamond-progress-header">

          <span className="diamond-progress-label">
            PROGRESO DEL GREMIO
          </span>

          <h2>
            Progreso a Diamante
          </h2>

          <p>
            Avance actual por Intérvalos
          </p>

        </div>

        <div className="diamond-progress-display">

          <div className="diamond-progress-visual">

            <div
              className="diamond-progress-bar"
              aria-label={`Progreso: ${progress.percentage}%`}
              style={
                {
                  "--progress": `${progress.barPercentage}%`,
                } as React.CSSProperties
              }
            >
              <div
                className="diamond-progress-fill"
              />

              {progress.barPercentage < 100 && (
                <div
                  className="diamond-progress-shimmer"
                  aria-hidden="true"
                />
              )}
            </div>

          </div>

          <div className="diamond-progress-info">

            <div className="diamond-progress-score">

              <strong>
                {progress.score.toLocaleString("es-GT")}
              </strong>

              <span>
                / {progress.diamondScore.toLocaleString("es-GT")} medallas
              </span>

            </div>

            <div className="diamond-progress-percentage">

              <strong>
                {progress.percentage}%
              </strong>

              <span>
                del objetivo Diamante
              </span>

            </div>

            <div className="diamond-progress-rank">

              <span className="diamond-progress-rank-label">
                Rango actual
              </span>

              <strong>
                {progress.rank}
              </strong>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}