import CodeBox from "../../components/codebox/CodeBox";
import SideMenu from "../../components/sidemenu/SideMenu";
import "../style-page.css";
function FunctionScope() {
  return (
    <>
      <SideMenu />
      <main>
        <h2>Functions in JavaScript:</h2>
        <article>
          <p>
            Functions are blocks of code that perform a specific task or
            calculate a value. They allow you to organize and reuse code, making
            your program more modular. In JavaScript, you can define functions
            using the function keyword, and they can accept parameters and
            return values. Example of a <b>function</b> declaration:
          </p>
          <CodeBox>
            function greet(name) {"{"} <br />
            console.log('Hello, ' + name + '!');
            <br />
            {"}"}
          </CodeBox>
          <p>
            Example of a function expression (assigning a function to a
            variable):
          </p>
          <CodeBox>
            const greet = function(name) {"{"} <br />
            console.log('Hello, ' + name + '!'); <br />
            {"}"};
          </CodeBox>
          <p>
            Example of an arrow function (a concise way to define functions):
          </p>
          <CodeBox>
            const greet = (name) {"=>"} {"{"} <br />
            console.log('Hello, ' + name + '!'); <br />
            {"}"};
          </CodeBox>
          <p>
            To call (or invoke) a function, you simply use its name followed by
            parentheses and any required arguments. <br />
            Example of calling the <b>greet</b> function:
          </p>
          <CodeBox>greet('John'); // Output: Hello, John!</CodeBox>
          <p>
            Functions can also return values using the <b>return</b> statement.
            This allows you to use the result of a function in other parts of
            your code. Example of a function that returns a value:
          </p>
          <CodeBox>
            function add(a, b) {"{"} <br />
            {"return"} {"a + b"};<br />
            {"}"} <br />
            const result = add(2, 3); <br />
            console.log(result); // Output: 5
          </CodeBox>
        </article>
        <article>
          <p>
            <b>Scope in JavaScript:</b> Scope refers to the visibility and
            accessibility of variables, functions, and objects in a particular
            part of your code. In JavaScript, there are two main types of scope:
            global scope and local scope.
          </p>
          <ol>
            <li>
              <b>Global Scope:</b> Variables declared outside of any function
              have global scope, meaning they can be accessed from anywhere in
              the code.
            </li>
            <CodeBox>
              const globalVariable = 'I am a global variable'; <br />
              <br />
              function doSomething() {"{"} <br />
              console.log(globalVariable); // Accessible inside functions
              <br />
              {"}"}
              <br />
              console.log(globalVariable); // Accessible outside functions
            </CodeBox>
            <li>
              <b>Local Scope:</b> Variables declared inside a function have
              local scope, meaning they can only be accessed within that
              function.
            </li>
            <CodeBox>
              function doSomething() {"{"}
              const localVariable = 'I am a local variable'; <br />
              console.log(localVariable); // Accessible inside the function{" "}
              <br />
              {"}"}
              <br />
              <br />
              console.log(localVariable); // Error: localVariable is not defined
            </CodeBox>
          </ol>
          <p>
            JavaScript follows a concept called "lexical scoping" or "static
            scoping." It means that variables are resolved based on their
            location in the source code.
          </p>
          <p>
            Nested functions can access variables from their containing (parent)
            functions, but the reverse is not true. This is known as "closure.
          </p>
          "
          <p>
            Understanding scope is crucial for avoiding naming conflicts,
            organizing code, and ensuring variables are accessed where they are
            intended to be used.
          </p>
        </article>
      </main>
    </>
  );
}

export default FunctionScope;
