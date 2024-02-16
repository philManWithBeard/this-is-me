import { Link } from "react-router-dom";

export const Section = ({ children, url }) => {
  return (
    <div className="section mb-4">
      <div className="title-row mb-4"></div>
      <div className="content">{children}</div>
      <Link className={`btn btn-secondary`} to={url}>
        Edit
      </Link>
    </div>
  );
};

export const SectionRow = ({ children }) => {
  return <div className="section-row">{children}</div>;
};
