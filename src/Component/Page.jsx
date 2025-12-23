import React from 'react'

const Page = ({ children, flipped, zIndex }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#aee7f5ff",
        color: "#1e1818ff",
        fontFamily: "Arial, sans-serif",
        zIndex: zIndex,
        padding: "30px",
        transformOrigin: "left",
        transition: "transform 1s",
        transform: flipped ? "rotateY(-180deg)" : "rotateY(0deg)",
        backfaceVisibility: "hidden",
        borderTopLeftRadius: "12px",
        borderBottomLeftRadius: "12px",
        borderTopRightRadius: "2px",
        borderBottomRightRadius: "2px",

      }}
    >
      <div style={{ textAlign: "center" }}>
        {children}
      </div>
    </div>
  );
};

export default Page;
