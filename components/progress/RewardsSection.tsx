import { data } from "@/lib/progress/data";

import type { ReactNode } from "react";

interface RewardItemProps {
  name: string;
  amount: number;
  icon: ReactNode;
}

function RewardItem({
  name,
  amount,
  icon,
}: RewardItemProps) {
  return (
    <div className="reward-item">

      <div className="reward-icon">
        {icon}
      </div>

      <div className="reward-info">

        <span>
          {name}
        </span>

        <strong>
          {amount.toLocaleString("es-GT")}
        </strong>

      </div>

    </div>
  );
}

export default function RewardsSection() {
  return (
    <section className="rewards-section">

      <div className="rewards-section-header">

        <span>
          RECOMPENSAS
        </span>

        <h2>
          Recompensas de temporada
        </h2>

        <p>
          Beneficios obtenidos gracias al esfuerzo colectivo del gremio.
        </p>

      </div>

      <div className="rewards-list">

        <RewardItem
          name="Reliquias"
          amount={data.reliquias}
          icon={
            <img
            src="/icons/elements/reliquia_prima.png"
            alt="Reliquias"
            width={70}
            height={110}
            />
          }
        />

        <RewardItem
          name="Canopias"
          amount={data.canopias}
          icon={
            <img
            src="/icons/elements/canopias.png"
            alt="Reliquias"
            width={80}
            height={80}
            />
          }
        />

        <RewardItem
          name="Frag. Diamante"
          amount={data.fragmentos_diamante}
          icon={
            <img
            src="/icons/elements/fragmentos_diamante.png"
            alt="Frag. Diamante"
            width={80}
            height={80}
            />
          }
        />

        <RewardItem
          name="Frag. Oro"
          amount={data.fragmentos_oro}
          icon={
            <img
            src="/icons/elements/fragmentos_oro.png"
            alt="Frag. Oro"
            width={80}
            height={80}
            />
          }
        />

        <RewardItem
          name="Cofres Dorados"
          amount={data.cofres_dorados}
          icon={
            <img
            src="/icons/elements/guild_chest_gold.png"
            alt="Cofres Dorados"
            width={100}
            height={100}
            />
          }
        />

        <RewardItem
          name="Cofres"
          amount={data.cofres}
          icon={
            <img
            src="/icons/elements/guild_chest.png"
            alt="Cofres"
            width={95}
            height={95}
            />
          }
        />

        <RewardItem
          name="Boletos"
          amount={data.boletos}
          icon={
            <img
            src="/icons/elements/boletos_de_gremio.png"
            alt="Boletos"
            width={80}
            height={80}
            />
          }
        />

        <RewardItem
          name="Frag. Elementales"
          amount={data.fragmentos_elementales}
          icon={
            <img
            src="/icons/elements/fragmentos_elementales.png"
            alt="fragmentos Elementales"
            width={100}
            height={100}
            />
          }
        />

        <RewardItem
          name="Repezcas"
          amount={data.repezcas}
          icon={
            <img
            src="/icons/elements/repezca_dorada.png"
            alt="Repezcas"
            width={100}
            height={100}
            />
          }
        />

        <RewardItem
          name="Rel. de Llave"
          amount={data.reliquia_llave}
          icon={
            <img
            src="/icons/elements/reliquia_llave.png"
            alt="Rel. de Llave"
            width={100}
            height={100}
            />
          }
        />

        <RewardItem
          name="Tentempies Grande"
          amount={data.tentempies}
          icon={
            <img
            src="/icons/elements/tentempies.png"
            alt="Tentempies Grande"
            width={120}
            height={120}
            />
          }
        />

        <RewardItem
          name="por cada 1,000 sobre Diamante"
          amount={data.extra}
          icon={
            <img
            src="/icons/elements/extrax1000_icon.png"
            alt="Extra x1000"
            width={140}
            height={140}
            />
          }
        />

      </div>

    </section>
  );
}