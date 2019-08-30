import React, { useEffect } from "react";
import "simplemde/dist/simplemde.min.css";
import SimpleMDE from "simplemde/dist/simplemde.min.js";

const MarkEdit = (props: any) => {
  useEffect(() => {
    const simplemde = new SimpleMDE({
      element: document.getElementById("markDown")
    });
    simplemde.codemirror.on("change", () => {
      props.onChange(simplemde.value());
    });
  }, []);

  return (
    <>
      {props.value}
      {props.children}
    </>
  );
};

export default MarkEdit;
