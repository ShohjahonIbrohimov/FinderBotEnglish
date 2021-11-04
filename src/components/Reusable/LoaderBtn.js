import React, { useState } from "react";
import Loader from "./Loader";

function LoaderBtn({
  loading,
  title,
  background = "#5cb85c",
  disabled = false,
  type = "submit",
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`app-button width100`}
      style={{ position: "relative", background }}
    >
      {!loading && <span>{title}</span>}
      {loading && <Loader loading={loading} />}
    </button>
  );
}

export default LoaderBtn;
