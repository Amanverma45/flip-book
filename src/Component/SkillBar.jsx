import React from 'react'

const SkillBar = ({ skill, level }) => {
  return (
    <div style={{ marginBottom: "12px", textAlign: "left" }}>
      <div style={{ fontSize: "14px", marginBottom: "4px" }}>
        {skill}
      </div>

      <div
        style={{
          width: "100%",
          height: "8px",
          background: "#ddd",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            width: level,
            height: "100%",
            background: "#4caf50",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;

