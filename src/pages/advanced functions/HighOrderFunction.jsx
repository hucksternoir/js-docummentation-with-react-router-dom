import CodeBox from "../../components/codebox/CodeBox";
import SideMenu from "../../components/sidemenu/SideMenu";
import "../style-page.css";

function HighOrderFunction() {
  return (
    <>
      <SideMenu />
      <main>
        <h2>Higher Order Function</h2>
        <article>
          <p>
            In JavaScript, higher-order functions are functions that can accept
            other functions as arguments or return functions as their results.
            This concept is derived from functional programming and allows for
            more flexible and powerful coding patterns.
          </p>
          <p>Here's an explanation of higher-order functions in JavaScript:</p>
        </article>
        <article>
          <ol>
            <li>
              <p>
                <b>Accepting functions as arguments:</b> Higher-order functions
                can take other functions as arguments. These functions are
                commonly referred to as "callback functions." The higher-order
                function can then use the callback function at some point within
                its own implementation. For example:
              </p>
              <CodeBox>
                function higherOrderFunction(callback) {"{"} <br />
                // Do some operations
                <br />
                callback(); // Call the callback function
                <br />
                {"}"}
                <br />
                <br />
                function callbackFunction() {"{"}
                <br />
                console.log('Callback function called');
                <br />
                {"}"}
                <br />
                <br />
                higherOrderFunction(callbackFunction);
              </CodeBox>
              <p>
                In the above example, <b>higherOrderFunction</b> accepts <b></b>
                as an argument and later calls it.
              </p>
            </li>
            <li>
              <p>
                <b>Returning functions as results:</b> Higher-order functions
                can also return functions. This allows for the creation of
                specialized functions based on different conditions or inputs.
                For example:
              </p>
              <CodeBox>
                function higherOrderFunction() {"{"}
                <br />
                if (condition) {"{"}
                <br />
                return function() {"{"}
                <br />
                console.log('Condition is true');
                <br />
                {"}"};<br />
                {"}"} else {"{"}
                <br />
                return function() {"{"}
                <br />
                console.log('Condition is false');
                <br />
                {"}"};<br />
                {"}"}
                <br />
                {"}"}
                const returnedFunction = higherOrderFunction(); <br />
                returnedFunction(); // Calls the returned function
              </CodeBox>
              <p>
                In this example, <b>higherOrderFunction</b> returns a different
                function based on a condition. The returned function can then be
                stored in a variable (<b>returnedFunction</b>) and called later.
              </p>
            </li>
          </ol>
        </article>
      </main>
    </>
  );
}

export default HighOrderFunction;
