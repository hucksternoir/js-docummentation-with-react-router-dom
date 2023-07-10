import CodeBox from "../../components/codebox/CodeBox";
import SideMenu from "../../components/sidemenu/SideMenu";
import "../style-page.css";

function ArrowFunction() {
  return (
    <>
      <SideMenu />
      <main>
        <h2>Arrow Function</h2>
        <article>
          <p>
            Arrow functions are a concise syntax introduced in JavaScript ES6
            (ECMAScript 2015) for defining functions. They provide a shorter and
            more expressive way to write function expressions. Here's an
            explanation of arrow functions in JavaScript:
          </p>
        </article>
        <article>
          <ol>
            <li>
              <p>
                <b>Basic Syntax:</b> Arrow functions are defined using a compact
                syntax using the "fat arrow" {"(=>)"} notation. They can have
                either a concise form or a block form. Here are examples of
                both:
              </p>
              <CodeBox>
                // Concise form with implicit return const multiply = (a, b){" "}
                {"=>"} a * b; <br />
                <br />
                // Block form with explicit return const divide = (a, b) {
                  "=>"
                }{" "}
                {"{"}
                <br />
                return a / b;
                <br />
                {"}"};
              </CodeBox>
              <p>
                In the concise form, if the function body consists of a single
                expression, it is automatically returned. In the block form, you
                need to explicitly use the <b>return</b> keyword to return a
                value.
              </p>
            </li>
            <li>
              <p>
                <b>Shorter Function Syntax:</b> Arrow functions provide a
                shorter syntax compared to traditional function expressions,
                especially when using single-line functions or when writing
                inline callbacks. Here's an example:
              </p>
              <CodeBox>
                // Traditional function expression <br />
                const add = function(a, b) {"{"} <br />
                return a + b;
                <br />
                {"}"};<br />
                <br />
                // Arrow function
                <br />
                const subtract = (a, b) {"=>"} a - b;
                <br />
              </CodeBox>
              <p>
                Arrow functions eliminate the need for the <b>function</b>{" "}
                keyword and reduce the code verbosity.
              </p>
            </li>
            <li>
              <p>
                <b>Lexical this Binding:</b> One of the key differences between
                arrow functions and regular functions is the way they handle the
                <b>this</b> keyword. Arrow functions do not bind their own{" "}
                <b>this</b> value but instead inherit it from the surrounding
                context (the enclosing scope). This behavior is called "lexical
                this binding" and can be advantageous in certain situations.
                Here's an example:
              </p>
              <CodeBox>
                function Person() {"{"}
                <br />
                this.age = 0; // Regular function with its own 'this'
                <br />
                setInterval(function growUp() {"{"} <br />
                this.age++;
                <br />
                console.log(this.age);
                <br />
                {"}"}, 1000);
                <br />
                {"}"}
                <br />
                <br />
                const person = new Person();
                <br />
                // Output: NaN (Not a Number) - <br />
                // 'this' in the callback function is not the Person object
                <br />
                <br />
                function Person() {"{"}
                <br />
                this.age = 0;
                <br />
                <br />
                // Arrow function with lexical 'this'
                <br />
                setInterval{"(() => "}
                {"{"}
                <br />
                this.age++;
                <br />
                console.log(this.age);
                <br />
                {"}"}, {"1000)"};<br />
                {"}"}
                <br />
                const person = new Person();
                <br />
                // Output: 1, 2, 3, ... - <br />
                //'this' in the arrow function refers to the Person object
              </CodeBox>
              <p>
                In the first example, the regular function callback inside
                <b>setInterval</b> has its own <b>this</b> value, which is not
                the same as the
                <b>this</b> inside the <b>Person</b> constructor. In the second
                example, the arrow function retains the <b>this</b> value of the
                surrounding <b>Person</b> object, resulting in the expected
                behavior.
              </p>
            </li>
          </ol>
        </article>
        <p>
          Arrow functions are widely used in modern JavaScript code due to their
          concise syntax and lexical this binding, making them particularly
          useful in functional programming and working with array methods like
          map, filter, and reduce.
        </p>
      </main>
    </>
  );
}

export default ArrowFunction;
