import SideMenu from "../../components/sidemenu/SideMenu";
import CodeBox from "../../components/codebox/CodeBox";
import "../style-page.css";

export function VariablesTypesData() {
  const person = {
    name: "John",
    age: 30,
    city: "New York",
  };

  return (
    <>
      <SideMenu />
      <main>
        <article>
          <h2>Variables in JavaScript:</h2>
          <p>
            In JavaScript, variables are used to store and manipulate data. They
            act as containers that hold values that can be accessed and modified
            throughout the program. When declaring a variable, you use the{" "}
            <b>var</b>,<b>let</b>, or <b>const</b> keyword followed by the
            variable name. Example:
          </p>
          <CodeBox>
            // Variable declaration and assignment <br />
            let age = 25;
            <br />
            // Variable reassignment <br />
            age = 30;
          </CodeBox>
        </article>
        <article>
          <h2>Types of Data in JavaScript:</h2>
          <p>
            JavaScript has several built-in data types that define the kind of
            values that can be stored in variables. The main data types in
            JavaScript are:
          </p>
          <ol>
            <li>
              <p>
                <b>Number:</b> Represents numeric values, including integers and
                floating-point numbers. Example:
              </p>
            </li>
            <CodeBox>
              let count = 10; <br />
              let price = 19.99;
            </CodeBox>
            <li>
              <p>
                <b>String</b>: Represents textual data enclosed in single quotes
                ('') or double quotes (""). Example:
              </p>
            </li>
            <CodeBox>
              let name = 'John'; <br />
              let message = "Hello, World!";
            </CodeBox>
            <li>
              <p>
                <b>Boolean:</b> Represents a logical value that can be either
                true or false. Example:
              </p>
            </li>
            <CodeBox>
              let isLogged = true; <br />
              let isActive = false;
            </CodeBox>
            <li>
              <p>
                <b>Array:</b> Represents an ordered collection of values
                enclosed in square brackets ([]). Example:
              </p>
            </li>
            <CodeBox>
              let numbers = [1, 2, 3, 4, 5]; <br />
              let fruits = ['apple', 'banana', 'orange'];
            </CodeBox>
            <li>
              <p>
                <b>Object:</b> Represents a collection of key-value pairs
                enclosed in curly braces ({}) or created with the{" "}
                <b>new Object()</b> constructor. Example:
              </p>
            </li>
            <CodeBox>
              <p>
                let person = {"{"}person : "Nelson", <br /> age: 23 <br />,
                city: 'New York'{"}"};
              </p>
            </CodeBox>
            <li>
              <p>
                <b>Null:</b> Represents the intentional absence of any object
                value. Example:
              </p>
            </li>
            <CodeBox>let data = null;</CodeBox>
            <li>
              <p>
                <b>Undefined:</b> Represents a variable that has been declared
                but not assigned a value. Example:
              </p>
            </li>
            <CodeBox>
              let value; <br />
              console.log(value); // Output: undefined
            </CodeBox>
          </ol>
        </article>
        <p>
          These are the basic data types in JavaScript. Additionally, JavaScript
          also provides other advanced types like Date, RegExp, and more, along
          with the ability to define custom data types using objects or classes.
        </p>

        <p>
          Including explanations, examples, and code snippets will help users
          understand and utilize variables and data types effectively in
          JavaScript.
        </p>
      </main>
    </>
  );
}

export default VariablesTypesData;
