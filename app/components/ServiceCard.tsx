"use client";

import Link from "next/link";

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

      <Link href={link} className="card-btn card-transition">
        Ver detalhes
      </Link>
    </div>
  );
}

