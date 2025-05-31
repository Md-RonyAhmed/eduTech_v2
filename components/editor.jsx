"use client";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Editor = ({ onChange, value }) => {
  return (
    <div className="bg-white">
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </div>
  );
};
