import React, { useEffect, useState } from "react";
import "simplemde/dist/simplemde.min.css";
import SimpleMDE from "simplemde/dist/simplemde.min.js";

const MarkEdit = (props: any) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const simplemde = new SimpleMDE({
      element: document.getElementById("markDown")
    });
    simplemde.codemirror.on("change", () => {
      setValue(simplemde.value());
    });
  }, []);

  return (
    <>
      {value}
      {props.children}
    </>
  );
};

export default MarkEdit;
