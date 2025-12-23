import React from 'react'

  const ProjectCard = ({ title, description }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "12px",
        marginBottom: "12px",
        borderRadius: "6px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        textAlign: "left",
      }}
    >
      <h4 style={{ margin: "0 0 6px 0" }}>{title}</h4>
      <p style={{ margin: 0, fontSize: "14px" }}>
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
