import CodeBox from "../../components/codebox/CodeBox";
import SideMenu from "../../components/sidemenu/SideMenu";
import "../style-page.css";

function Modification() {
  return (
    <>
      <SideMenu />
      <main>
        <h2>Modifying Elements</h2>
        <main>
          <article>
            <p>
              To modify attributes, styles, and content of elements in the
              Document Object Model (DOM), you can use JavaScript. The DOM
              provides various methods and properties to manipulate elements.
              Here's how it works:
            </p>

            <ol>
              <li>
                Modifying Attributes: You can modify attributes of an element
                using the <b>setAttribute()</b> method or directly accessing the
                <b>attribute</b> property of the element. For example, to change
                the "src" attribute of an image element:
              </li>
              <CodeBox>
                var img = document.getElementById("myImage"); <br />
                img.setAttribute("src", "new-image.jpg");
              </CodeBox>
              <li>
                Modifying Styles: You can modify the styles of an element using
                the <b>style</b> property. This property allows you to access
                and modify individual CSS properties of an element. For example,
                to change the background color of a div element:
              </li>
              <CodeBox>
                var div = document.getElementById("myDiv"); <br />
                div.style.backgroundColor = "blue";
              </CodeBox>
              <li>
                Modifying Content: You can modify the content of an element by
                accessing the <b>innerHTML</b> or <b>textContent</b> properties.
                The <b>innerHTML</b>
                property allows you to set or get the HTML content of an
                element, while the <b>textContent</b> property deals with the
                plain text content. For example, to change the text content of a
                paragraph element:
              </li>
              <CodeBox>
                var paragraph = document.getElementById("myParagraph"); <br />
                paragraph.innerHTML = "New content";
              </CodeBox>
            </ol>
          </article>
          <p>
            These are just a few examples of how you can modify attributes,
            styles, and content of elements using JavaScript and the DOM. By
            combining these methods and properties with various DOM traversal
            techniques, you can dynamically update and manipulate elements on a
            web page.
          </p>
        </main>
      </main>
    </>
  );
}

export default Modification;
