import CodeBox from "../../components/codebox/CodeBox";
import SideMenu from "../../components/sidemenu/SideMenu";
import "../style-page.css";

function SelectingElement() {
  return (
    <>
      <SideMenu />
      <main>
        <h2>Selecting DOM Element</h2>
        <article>
          <p>
            The selection of an HTML element can be done using JavaScript and
            the DOM API. There are several ways to select an element, depending
            on the requirements and the structure of the HTML document. I'll
            explain some of the main ways to select elements:
          </p>

          <ol>
            <li>
              Selection by ID: Each HTML element can have a unique "id"
              attribute. To select an element by ID, you can use the{" "}
              <b>getElementById()</b> method of the <b>document</b> object. For
              example:
            </li>
            <CodeBox>var element = document.getElementById("myId");</CodeBox>
            <li>
              Selection by class: HTML elements can also have one or more
              "class" attributes. To select elements with a specific class, you
              can use the <b>getElementsByClassName()</b> method of the{" "}
              <b>document</b> object. It returns a collection of matching
              elements. For example:
            </li>
            <CodeBox>
              var elements = document.getElementsByClassName("myClass");
            </CodeBox>
            <li>
              Selection by tag name: If you want to select all elements with a
              particular HTML tag, you can use the <b>getElementsByTagName()</b>{" "}
              method of the <b>document</b> object. It returns a collection of
              elements with the specified tag. For example:
            </li>
            <CodeBox>
              var elements = document.getElementsByTagName("div");
            </CodeBox>
            <li>
              Selection by CSS selector: A more flexible way to select elements
              is by using CSS selectors. The <b>querySelector()</b> method of
              the <b>document</b>
              object allows you to select an element based on a CSS selector. It
              returns the first matching element found. For example:
            </li>
            <CodeBox>var element = document.querySelector("#myId");</CodeBox>
          </ol>
        </article>
        <p>
          These are just some of the basic ways to select HTML elements using
          the DOM API. Depending on the complexity of the HTML structure and
          your code requirements, there are many other ways to select elements
          and traverse the DOM.
        </p>
      </main>
    </>
  );
}

export default SelectingElement;
