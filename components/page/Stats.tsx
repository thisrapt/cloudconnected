import { companyStats } from "@/lib/content";

export default function Stats({ title }: { title?: string }) {
  return (
    <section className="stats" aria-label={title ?? "Kerncijfers"}>
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        <dl className="stats-grid">
          {companyStats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>
                {stat.value}
                <span>{stat.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
