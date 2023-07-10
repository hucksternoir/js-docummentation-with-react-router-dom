import CodeBox from "../../components/codebox/CodeBox";
import SideMenu from "../../components/sidemenu/SideMenu";
import "../style-page.css";

function Closure() {
  return (
    <>
      <SideMenu />
      <main>
        <h2>Closure</h2>
        <article>
          <p>
            In JavaScript, closures are a powerful and fundamental concept that
            allows functions to retain access to variables from their outer
            (enclosing) scopes, even after those outer scopes have finished
            executing. Closures enable data encapsulation and can be used to
            create private variables and functions. Here's an explanation of
            closures in JavaScript:
          </p>
        </article>
        <article>
          <ol>
            <li>
              <p>
                <b>Lexical Scoping:</b> To understand closures, it's important
                to first understand lexical scoping. In JavaScript, variables
                are scoped based on their location in the source code. Each
                function creates its own scope, and nested functions have access
                to variables defined in their outer scopes. This behavior is
                known as lexical scoping.
              </p>
            </li>
            <li>
              <p>
                <b>Definition of Closures:</b> A closure is formed when an inner
                function accesses variables from its outer function, even after
                the outer function has finished executing. The inner function
                "closes over" the variables it references, hence the term
                "closure." Here's an example:
              </p>
              <CodeBox>
                function outerFunction() {"{"} <br />
                const outerVariable = 'I am from the outer function';
                <br />
                <br />
                function innerFunction() {"{"}
                <br />
                console.log(outerVariable);
                <br />
                {"}"}
                <br />
                <br />
                return innerFunction;
                {"}"}
                <br />
                <br />
                const closure = outerFunction(); closure(); <br />
                // Output: 'I am from the outer function'
              </CodeBox>
              <p>
                In this example, <p>outerFunction</p> returns the{" "}
                <b>innerFunction</b>. When
                <b>outerFunction</b> is called and assigned to <b>closure</b>,
                the
                <b>innerFunction</b> retains access to the <b>outerVariable</b>{" "}
                defined in its outer scope, even after <b>outerFunction</b> has
                finished executing.
              </p>
            </li>
            <li>
              <p>
                <b>Preserving State:</b> Closures can also be used to preserve
                the state of variables. Each time the outer function is called,
                a new closure with its own set of variables is created. Here's
                an example that counts the number of times a function is called:
              </p>
              <CodeBox>
                function counter() {"{"} <br />
                let count = 0;
                <br />
                function increment() {"{"}
                <br />
                count++;
                <br />
                console.log(count);
                <br />
                {"}"}
                <br />
                <br />
                return increment;
                <br />
                {"}"}
                <br />
                <br />
                const incrementCounter = counter();
                <br />
                incrementCounter(); // Output: 1<br />
                incrementCounter(); // Output: 2<br />
              </CodeBox>
              <p>
                In this example, each time <b>counter</b> is called, a new
                closure with its own count variable is created. The{" "}
                <b>increment</b>
                function, returned by <b>counter</b>, has access to its own
                closure and increments the <b>count</b> variable accordingly.
              </p>
            </li>
          </ol>
          <p>
            Closures are useful for a variety of scenarios, including
            maintaining private data, creating function factories, and
            implementing callback functions. They are widely used in JavaScript
            for creating modular and encapsulated code. Understanding closures
            is essential for mastering JavaScript and its more advanced
            features.
          </p>
        </article>
      </main>
    </>
  );
}

export default Closure;
