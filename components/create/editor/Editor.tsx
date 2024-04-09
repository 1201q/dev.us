import { SetStateAction } from "jotai";
import React, { Dispatch, useMemo, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import styled from "styled-components";

export default function Editor({
  setFocus,
}: {
  setFocus: Dispatch<SetStateAction<boolean>>;
}) {
  const [values, setValue] = useState("");
  const modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {},
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: false,
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <ReactQuill
        modules={modules}
        onChange={setValue}
        placeholder="소개글을 입력하세요."
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />
    </div>
  );
}
