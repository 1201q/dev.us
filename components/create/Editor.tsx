import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);
  return <div>{render && <ReactQuill />}</div>;
};

export default Editor;
