import CodeBox from "../../components/codebox/CodeBox";
import SideMenu from "../../components/sidemenu/SideMenu";
import "../style-page.css";
function Json() {
  return (
    <>
      <SideMenu />
      <main>
        <article>
          <h2>JSON (JavaScript Object Notation):</h2>{" "}
          <p>
            JSON is a lightweight data interchange format that is easy for
            humans to read and write and easy for machines to parse and
            generate. It is based on a subset of the JavaScript programming
            language and is often used to transmit data between a server and a
            web application, as an alternative to XML.
          </p>
        </article>
        <article>
          <h2>JSON Syntax:</h2>
          <p>
            JSON data is represented as key-value pairs, similar to JavaScript
            objects. Here's an example of JSON data:
          </p>
          <CodeBox>
            {"{"} <br />
            "name": "John", <br /> "age": 30, <br /> "gender": "male" <br />
            {"}"}
          </CodeBox>
          <p>
            In this example, we have an object with three properties:{" "}
            <b>name</b>, <b>age</b>, and <b>gender</b>. The keys are enclosed in
            double quotes, and the values can be strings, numbers, booleans,
            arrays, or even nested objects.
          </p>
        </article>
        <article>
          <h2>JSON Data Types</h2>:
          <p>JSON supports the following data types:</p>
          <ol>
            <li>
              <b>String:</b> A sequence of characters enclosed in double quotes.
            </li>
            <li>
              <b>Number:</b> A numeric value.
            </li>
            <li>
              <b>Boolean:</b> Either <b>true</b> or <b>false</b>.
            </li>
            <li>
              <b>Array:</b> An ordered list of values enclosed in square
              brackets ([]).
            </li>
            <li>
              <b>Object:</b> A collection of key-value pairs enclosed in curly
              braces ({}) where keys are strings.
            </li>
          </ol>
        </article>
        <article>
          <h2>Parsing and Stringifying JSON:</h2>
          <p>
            In JavaScript, you can parse JSON data into a JavaScript object
            using the <p>JSON.parse()</p> method, and you can convert a
            JavaScript object into a JSON string using the
            <p>JSON.stringify()</p> method. Here's an example:
          </p>
          <CodeBox>
            let jsonStr = '{"{"}"name":"John","age":30,"gender":"male"{"}"}';{" "}
            <br />
            let obj = JSON.parse(jsonStr);
            <br />
            <br />
            console.log(obj.name); // Output: "John"
            <br />
            <br />
            let jsonObj ={" {"}
            <br />
            name: "Jane",
            <br />
            age: 25,
            <br />
            gender: "female"
            <br />
            {"}"};<br />
            <br />
            let jsonString = JSON.stringify(jsonObj);
            <br />
            console.log(jsonString); // Output: '{"{"}
            "name":"Jane","age":25,"gender":"female"{"}"}'
          </CodeBox>
          <p>
            In the first part of the example, we parsed a JSON string into a
            JavaScript object using <b>JSON.parse()</b>. We could then access
            the properties of the object. In the second part, we used{" "}
            <b>JSON.stringify()</b> to convert a JavaScript object into a JSON
            string.
          </p>
        </article>
        <article>
          <h2>Using JSON with APIs:</h2>
          <p>
            JSON is commonly used for transmitting data between a server and a
            web application. Many APIs (Application Programming Interfaces) use
            JSON as the data format for requests and responses. For example,
            when making an HTTP request to an API, you might send JSON data in
            the request body, and the API would respond with JSON data in the
            response.
          </p>
        </article>
        <article>
          <h2>JSON and JavaScript Compatibility:</h2>
          <p>
            JSON is based on a subset of the JavaScript programming language.
            This means that almost all valid JSON is also valid JavaScript code.
            So, you can often use JSON directly in JavaScript without any
            modifications.
          </p>
        </article>
      </main>
    </>
  );
}

export default Json;
