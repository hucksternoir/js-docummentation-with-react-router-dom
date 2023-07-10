import SideMenu from "../../components/sidemenu/SideMenu";
import "../style-page.css";

function WhatsDom() {
  return (
    <>
      <SideMenu />
      <main>
        <h2>What is DOM?</h2>
        <p>
          The Document Object Model, commonly referred to as DOM, is a
          programming interface for web documents. It represents the structure
          of an HTML or XML document as a tree-like model, where each element,
          attribute, and piece of text in the document is represented as a node
          in the tree.
        </p>

        <p>
          The DOM allows web developers to access, manipulate, and update the
          content, structure, and style of a web page dynamically. It provides a
          set of objects, properties, and methods that allow programmers to
          interact with the document elements using scripting languages like
          JavaScript.
        </p>

        <p>
          With the DOM, developers can programmatically access and modify
          various aspects of a web page, such as adding or removing elements,
          changing text content, modifying styles, and responding to user
          interactions. It provides a standardized way to traverse, manipulate,
          and update the document structure across different web browsers and
          platforms.
        </p>
        <p>
          In summary, the DOM is an application programming interface (API) that
          provides a representation of a web document as a tree of objects,
          enabling developers to manipulate and interact with the content and
          structure of web pages using scripting languages like JavaScript.
        </p>
      </main>
    </>
  );
}

export default WhatsDom;
