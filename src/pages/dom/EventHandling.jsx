import CodeBox from "../../components/codebox/CodeBox";
import SideMenu from "../../components/sidemenu/SideMenu";
import "../style-page.css";

function EventHandling() {
  return (
    <>
      <SideMenu />
      <main>
        <h2>Event Handling</h2>
        <article>
          <p>
            Event manipulation involves handling and responding to user
            interactions or actions that occur on a web page. In JavaScript and
            the Document Object Model (DOM), you can manipulate events to
            perform specific actions when events are triggered. Here's how it
            works:
          </p>
          <ol>
            <li>
              <p>
                {" "}
                <b>Event Listeners:</b> Event listeners are used to "listen" for
                specific events and execute a function or code block when the
                event occurs. You can attach event listeners to elements using
                methods such as
                <b> addEventListener()</b>. For example, to listen for a click
                event on a button element:
              </p>
            </li>
            <CodeBox>
              var button = document.getElementById("myButton"); <br />
              button.addEventListener("click", function(){" "}
              {
                <br />
                // Code to be executed when the button is clicked
              }
              );
            </CodeBox>
            <li>
              <p>
                <b>Event Types: </b>There are various types of events, such as
                click, mouseover, keydown, submit, and many more. You can attach
                event listeners to elements for specific event types. When the
                event is triggered, the associated function or code block will
                be executed.
              </p>
            </li>
            <li>
              <p>
                <b>Event Object:</b> When an event occurs, an event object is
                created and passed to the event handler function. This object
                provides information about the event and allows you to access
                properties and methods related to the event. For example, you
                can access the target element that triggered the event using the{" "}
                <b>event.target</b>
                property.
              </p>
            </li>
            <li>
              <p>
                <b>Event Propagation:</b> Events in the DOM follow a propagation
                mechanism, where an event triggered on a particular element can
                "bubble up" or "capture down" through its parent and child
                elements. This allows you to handle events at different levels
                of the DOM hierarchy. You can control the event propagation
                using methods such as <b>stopPropagation()</b>.
              </p>
            </li>

            <li>
              <p>
                <b>Event Handling Best Practices:</b> When working with event
                handling, it's important to follow best practices, such as
                avoiding inline event handlers in HTML and instead attaching
                event listeners using JavaScript. This separates the behavior
                from the markup and improves code maintainability.
              </p>
            </li>
          </ol>
        </article>
        <p>
          By manipulating events, you can create interactive web pages and
          respond to user actions in real-time. You can perform tasks like
          validating form inputs, updating content dynamically, and triggering
          animations or transitions based on user interactions.
        </p>
      </main>
    </>
  );
}

export default EventHandling;
