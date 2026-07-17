import { newcomers } from "@/lib/community/newcomers";

export default function NewMembers() {
  return (
    <section className="community-additions">
      <h2 className="community-additions__title">
        ✨ Incorporaciones
      </h2>

      <div className="additions-list">
        {newcomers.map((member, index) => (
          <article
            key={member.id ?? `${member.name}-${index}`}
            className="addition-card"
          >
            <img
              src={member.image}
              alt={`Perfil de ${member.name}`}
              className="addition-card__avatar"
            />

            <div className="addition-card__content">
              <h3 className="addition-card__name">
                ✨ Bienvenido,{" "}
                <span className="addition-card__name-highlight">
                  {member.name}
                </span>
              </h3>

              <p className="addition-card__message">
                {member.message ??
                  "Nos alegra tenerte formando parte de la alianza."}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}