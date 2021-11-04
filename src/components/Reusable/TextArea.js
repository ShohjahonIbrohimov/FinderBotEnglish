import React from "react";

function TextArea({
  register,
  name,
  width = "100%",
  placeholder = "Европарламент призвал расследовать роль России в инциденте с Ryanair",
  label = null,
  required = false,
}) {
  return (
    <div style={{ width, marginBottom: label ? "1.5rem" : "" }}>
      {label && <span className="label_title">{label}</span>}
      <textarea
        className="textarea"
        name={name}
        id=""
        placeholder={placeholder}
        ref={register({
          required,
        })}
      ></textarea>
    </div>
  );
}

export default TextArea;
