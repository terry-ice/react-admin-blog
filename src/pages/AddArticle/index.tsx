import React, { useEffect } from "react";
import "simplemde/dist/simplemde.min.css";
import SimpleMDE from "simplemde/dist/simplemde.min.js";

const AddArticle = () => {
  useEffect(() => {
    const simplemde = new SimpleMDE({});
    simplemde.codemirror.on("change", () => {
      // tslint:disable-next-line:no-console
      console.log(simplemde.value());
    });
  });

  return (
    <div className="App">
      <textarea />
    </div>
  );
};

export default AddArticle;
