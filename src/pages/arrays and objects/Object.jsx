import CodeBox from "../../components/codebox/CodeBox";
import SideMenu from "../../components/sidemenu/SideMenu";
import "../style-page.css";
function Object() {
  return (
    <>
      <SideMenu />
      <main>
        <h2>Object</h2>
        <article>
          <p>
            In JavaScript, objects are a fundamental data structure that allows
            you to group related data and functionality together. Objects
            consist of key-value pairs, where the keys are known as properties
            and the values can be any valid JavaScript data type, including
            other objects.
          </p>
        </article>
        <article>
          <p>
            Creating Objects: There are a few ways to create objects in
            JavaScript. One common approach is to use the object literal
            notation, which involves enclosing the key-value pairs within curly
            braces ({}). Here's an example:
          </p>
          <CodeBox>
            let person = {"{"} <br />
            name: "John", age: 30, gender: "male" <br />
            {"};"}
          </CodeBox>
          <p>
            In this example, we've created an object called <b>person</b> with
            three properties: <b>name</b>, <b>age</b>, and <b>gender</b>.
          </p>
        </article>
        <article>
          <p>
            <b> Accessing Object Properties:</b> You can access object
            properties using dot notation (objectName.propertyName) or bracket
            notation (objectName["propertyName"]). Here are examples using both
            approaches
          </p>
          <CodeBox>
            console.log(person.name); // Output: "John" <br />
            console.log(person["age"]); // Output: 30
          </CodeBox>
        </article>
        <article>
          <p>
            <b>Modifying Object Properties:</b> You can modify the value of an
            object property by assigning a new value to it. Here's an example:
          </p>
          <CodeBox>
            person.age = 35; <br />
            console.log(person.age); // Output: 35
          </CodeBox>
          <p>
            In this example, we changed the value of the <b>age</b> property
            from 30 to 35.
          </p>
        </article>
        <article>
          <p>
            <b>Object Methods:</b> In addition to properties, objects can also
            contain methods, which are functions associated with the object.
            Methods allow objects to perform actions or calculations. Here's an
            example of adding a method to the person object:
          </p>
          <CodeBox>
            let person = {"{"} <br />
            name: "John", age: 30, gender: "male", sayHello: function() {
              "{"
            }{" "}
            <br />
            console.log("Hello, my name is " + this.name); <br />
            {"}"} <br />
            {"};"}
            <br />
            person.sayHello(); // Output: "Hello, my name is John"
          </CodeBox>
          <p>
            In this example, we added a method called <b>sayHello</b> to the{" "}
            <b>person</b>
            object. The method logs a message to the console using the{" "}
            <b>name</b>
            property of the object.
          </p>
        </article>
        <article>
          <p>
            <b>Constructors:</b> Constructors are special functions used to
            create and initialize objects. They are typically defined using
            PascalCase naming conventions. Here's an example:
          </p>
          <CodeBox>
            function Person(name, age, gender) {"{"} <br />
            this.name = name; <br />
            this.age = age; <br />
            this.gender = gender; <br />
            {"}"}
            <br />
            <br />
            let person1 = new Person("John", 30, "male");
            <br />
            let person2 = new Person("Jane", 25, "female");
            <br />
            <br />
            console.log(person1.name); // Output: "John"
            <br />
            console.log(person2.age); // Output: 25
          </CodeBox>
          <p>
            In this example, we created a constructor function <b>Person</b>{" "}
            that takes in <b>name</b>, <b>age</b>, and <b>gender</b> parameters
            and assigns them to the respective properties of the newly created
            object using the <b>this</b> keyword. We then created two instances
            of the Person object using the <b>new</b> keyword.
          </p>
        </article>
      </main>
    </>
  );
}

export default Object;
