import CodeBox from "../../components/codebox/CodeBox";
import SideMenu from "../../components/sidemenu/SideMenu";
import "../style-page.css";

function CallbackPromise() {
  return (
    <>
      <SideMenu />
      <main>
        <h2>CallbackPromise</h2>
        <article>
          <p>
            In JavaScript, callbacks and promises are two important concepts
            used for handling asynchronous operations. They allow you to manage
            code execution when dealing with tasks that take time to complete,
            such as fetching data from an API or reading from a file. Here's an
            explanation of callbacks and promises:
          </p>
        </article>
        <article>
          <ol>
            <li>
              <p>
                <b>Callbacks:</b> Callbacks are functions that are passed as
                arguments to other functions and are called once an asynchronous
                operation is completed. They enable you to define what should
                happen after a certain task is finished. Here's an example:
              </p>
              <CodeBox>
                function fetchData(callback) {"{"}
                <br />
                setTimeout(function() {"{"}
                <br />
                const data = 'Some fetched data'; callback(data);
                <br />
                {"}"}, 2000);
                <br />
                {"}"}
                <br />
                function processData(data) {"{"}
                <br />
                console.log('Processed data:', data);
                <br />
                {"}"}
                <br />
                fetchData(processData);
              </CodeBox>
              <p>
                In this example, the <b>fetchData</b> function simulates an
                asynchronous operation by using <b>setTimeout</b> and then calls
                the callback function with the fetched data after a delay. The
                <b>processData</b> function is passed as the <b>callback</b> and
                will be executed when the data is available. Callbacks can
                become complex to manage when multiple asynchronous operations
                are involved or when error handling is required. This led to the
                development of promises.
              </p>
            </li>
            <li>
              <p>
                <b>Promises:</b> Promises provide a more structured and
                intuitive way to handle asynchronous operations. A promise
                represents the eventual completion or failure of an asynchronous
                operation and allows you to attach callbacks to handle its
                results. Here's an example:
              </p>
              <CodeBox>
                function fetchData() {"{"} <br />
                return new Promise(function(resolve, reject) {"{"}
                <br />
                setTimeout(function() {"{"}
                <br />
                const data = 'Some fetched data'; resolve(data);
                <br />
                {"}"}, 2000);
                <br />
                {"}"});
                <br />
                {"}"}
                <br />
                function processData(data) {"{"}
                <br />
                console.log('Processed data:', data);
                <br />
                {"}"}
                <br />
                fetchData() .then(processData) .catch(function(error) {"{"}
                <br />
                console.error('Error:', error);
                <br />
                {"}"});
              </CodeBox>
              <p>
                In this example, the <b>fetchData</b> function returns a promise
                that resolves with the fetched data. The <b>processData</b>{" "}
                function is used as a callback to the <b>then</b> method, which
                is invoked when the promise is resolved. If an error occurs, the{" "}
                <b>catch</b> method is called. Promises allow for better error
                handling, chaining multiple asynchronous operations together,
                and providing a more readable and maintainable code structure
                compared to deeply nested callbacks.
              </p>
            </li>
          </ol>
        </article>
        <article>
          <p>
            JavaScript also introduced async/await, which is built on top of
            promises and provides an even more concise and synchronous-like way
            of handling asynchronous operations. However, understanding
            callbacks and promises is crucial for effectively working with
            JavaScript code that uses older asynchronous patterns or third-party
            libraries.
          </p>
        </article>
      </main>
    </>
  );
}

export default CallbackPromise;
