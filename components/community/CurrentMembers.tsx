"use client";

import { useState } from "react";
import { currentMembers } from "@/lib/community/members";

export default function CurrentMembers() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof currentMembers)[number] | null
  >(null);

  return (
    <section className="community-members">
      <div className="current-members_header">
        <span>👥</span>

        <h2>Miembros Actuales</h2>

        <p>
          Cada rostro representa una parte de la historia, el esfuerzo y la
          comunidad que continúa construyendo DEV&apos;S ALLIANCE.
        </p>
      </div>

      <div className="members-grid">
        {currentMembers.map((member, index) => (
          <button
            key={member.id ?? `${member.name}-${index}`}
            className="member-card"
            onClick={() => setSelectedMember(member)}
            type="button"
          >
            <div className="member-avatar-wrapper">
              <img
                src={member.image}
                alt={`Perfil de ${member.name}`}
                className="member-avatar"
              />
            </div>

            <span className="member-name">{member.name}</span>
          </button>
        ))}
      </div>

      {selectedMember && (
        <div
          className="member-modal-overlay"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="member-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="member-modal-close"
              onClick={() => setSelectedMember(null)}
              type="button"
              aria-label="Cerrar información del miembro"
            >
              ×
            </button>

            <div className="member-modal-avatar-wrapper">
              <img
                src={selectedMember.image}
                alt={`Perfil de ${selectedMember.name}`}
                className="member-modal-avatar"
              />
            </div>

            <h3>{selectedMember.name}</h3>

            <p className="member-message">
              &quot;{selectedMember.message}&quot;
            </p>

            <div className="member-stats">
              <div className="member-stat">
                <span>Rango</span>
                <strong>{selectedMember.rank}</strong>
              </div>

              <div className="member-stat">
                <span>Poder</span>
                <strong>
                  {selectedMember.power?.toLocaleString("en-US") ?? "—"}
                </strong>
              </div>

              <div className="member-stat">
                <span>Personaje favorito</span>
                <strong>
                  {selectedMember.favoriteCharacter ?? "—"}
                </strong>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="current-members_footer">
        <p>
          ¡Solicita cambiar tu Frase de Presentación mediante un mensaje 
          y lo haremos!
        </p>
      </div>      
    </section>
  );
}