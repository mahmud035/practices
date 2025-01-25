import React from 'react';
import { Link } from 'react-router-dom';

interface ISectionProps {
  title: string;
  children: React.ReactNode;
  url: string;
}

export function Section({ title, children, url }: ISectionProps) {
  return (
    <div className="section mb-4">
      <div className="title-row mb-4">
        <h4>{title}</h4>
        <Link to={url} className={`btn btn-secondary`}>
          Edit
        </Link>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

export function SectionRow({ children }: { children: React.ReactNode }) {
  return <div className="section-row">{children}</div>;
}
