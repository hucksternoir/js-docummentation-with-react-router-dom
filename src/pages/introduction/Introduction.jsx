import SideMenu from "../../components/sidemenu/SideMenu";
import "../../pages/style-page.css";

function Introduction() {
  return (
    <>
      <SideMenu />
      <main>
        <article>
          <h2>What is Javascript?</h2>
          <p>
            JavaScript is a high-level, dynamic, and interpreted programming
            language. It was originally designed to be used in web browsers to
            enable the creation of interactive and dynamic web pages. The goal
            was to manipulate HTML content and CSS appearance, making it
            possible to interact with users and provide a richer and more
            user-friendly experience.
          </p>
        </article>
        <article>
          <h2>History and Evolution of JavaScript:</h2>
          <p>
            JavaScript was created in 1995 by Brendan Eich while working at
            Netscape Communications Corporation. Initially, he called the
            language "Mocha," but shortly after, it was renamed to "LiveScript."
            Later, for marketing reasons and business opportunities, the
            language was renamed again, this time to "JavaScript," capitalizing
            on the growing interest in the Java language at that time.
          </p>
          <p>
            As the language gained popularity, differences in implementation
            arose between browsers. To address this issue, several organizations
            came together to standardize JavaScript, resulting in the creation
            of ECMAScript (ES), a standard for the JavaScript language. The
            first ECMAScript specification was released in 1997, and since then,
            several versions have been released with new features and
            improvements.
          </p>
        </article>

        <article>
          <h2>Where JavaScript is Used:</h2>
          <p>
            Initially, JavaScript was mainly used to add interactivity to web
            pages, such as displaying alerts, validating forms, creating visual
            effects, among others. However, over time, the language expanded its
            scope and is now used in various areas, including:
          </p>
          <ol>
            <li>
              {" "}
              <b>Web Development:</b> JavaScript is widely used to create
              interactive web pages, web applications, and Single Page
              Applications (SPAs).
            </li>
            <li>
              <b>Mobile App Development:</b> With the use of frameworks like
              React Native and Ionic, it is possible to develop mobile
              applications using JavaScript.
            </li>
            <li>
              <b>Servers:</b> Node.js allows JavaScript to be executed on the
              server, enabling the development of backend applications.
            </li>
            <li>
              <b>Internet of Things (IoT):</b> JavaScript is used in IoT devices
              for control and interaction with the environment.
            </li>
            <li>
              <b>Gaming:</b> With libraries like Phaser or Three.js, JavaScript
              is used to create games and interactive experiences in the
              browser.
            </li>
            <li>
              <b>Browser Extensions:</b> JavaScript is used to create extensions
              and add-ons for browsers.
            </li>
          </ol>
        </article>
        <article>
          <h2>Advantages and Features of JavaScript:</h2>
          <p>Some of the main advantages and features of JavaScript include:</p>
          <ol>
            <li>
              <b>Easy to Learn:</b> JavaScript has a friendly syntax, making it
              relatively easy for beginners to learn.
            </li>
            <li>
              <b>Interactivity:</b> Enables the creation of interactive and
              dynamic web pages, enhancing the user experience.
            </li>
            <li>
              <b>Client-Side Execution:</b> JavaScript runs on the client's
              browser, reducing the server load.
            </li>
            <li>
              <b>Large Community and Libraries:</b> There is a wide community of
              developers and a vast number of libraries and frameworks available
              to facilitate development.
            </li>
            <li>
              <b>Standardization:</b> ECMAScript standardizes the language,
              ensuring consistency and compatibility across different platforms.
            </li>
            <li>
              <b>Versatility:</b> JavaScript can be used in different contexts,
              from front-end development to back-end, allowing code and skills
              sharing between layers.
            </li>
            <li>
              <b>Integration with HTML and CSS:</b> JavaScript has native
              integration with HTML and CSS, allowing manipulation and
              modification of page elements.
            </li>
          </ol>
          <p>
            These are just some of the advantages and features of JavaScript.
            Over the years, the language continues to evolve and gain more
            powerful features, becoming a popular choice for web development and
            beyond.
          </p>
        </article>
      </main>
    </>
  );
}

export default Introduction;
