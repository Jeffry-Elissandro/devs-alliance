import { dashboardData } from "@/data/dashboard";

import DashboardCard from "./DashboardCard";

export default function Dashboard() {
  return (
    <section className="dashboard">

      <div className="dashboard-header">

        <h1 className="dashboard-title">
          DEV'S ALLIANCE
        </h1>

        <p>
          Selecciona una sección para comenzar tu recorrido.
        </p>

      </div>

      <div className="dashboard-grid">

        {dashboardData.map((item) => (

          <DashboardCard
            key={item.title}
            {...item}
          />

        ))}

      </div>

      <footer className="dashboard-footer">

        <div className="footer-divider"></div>

        <p>
          © DEV'S ALLIANCE · Construido con pasión para la comunidad.
        </p>

        <p>
          Todos los derechos reservados sobre el contenido original. Proyecto fan no oficial sin afiliación con Skullgirls ni Autumn Games.
        </p>

      </footer>

    </section>
  );
}