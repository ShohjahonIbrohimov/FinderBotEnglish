import React from "react";

function SideBar({ children, open, setOpen, width = "40%" }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        className={`overlay ${open ? "overlay_show" : "overlay_hide"}`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        style={{ width }}
        className={`side_bar ${open ? "side_bar_show" : "side_bar_hide"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default SideBar;
