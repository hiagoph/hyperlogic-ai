"use client";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon?: string;
}

export default function ServiceCard({
  title,
  description,
  link,
  icon,
}: ServiceCardProps) {
  return (
    <div className="card reveal">
      {icon && <div className="icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="card-btn">
        Ver detalhes
      </a>
    </div>
  );
}
