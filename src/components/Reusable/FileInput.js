import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "./Loader";

function FileInput({ register, name, required = false, setValue }) {
  const [loading, setloading] = useState(false);

  const onChange = (e) => {
    setloading(true);
    let formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios({
      url: "/upload",
      method: "POST",
      data: formData,
    })
      .then((res) => {
        setloading(false);
        toast.success("Успех");
        setValue(res.data.url);
      })
      .catch((res) => {
        setloading(false);
        toast.error("Ошибка");
      });
  };

  return (
    <div>
      <input
        className="file-input"
        onChange={onChange}
        type="file"
        placeholder=""
        name={name}
        ref={register({ required })}
      />
      <Loader light={false} loading={loading} />
    </div>
  );
}

export default FileInput;
