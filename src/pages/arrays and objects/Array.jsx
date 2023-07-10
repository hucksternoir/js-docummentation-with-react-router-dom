import CodeBox from "../../components/codebox/CodeBox";
import SideMenu from "../../components/sidemenu/SideMenu";
import "../style-page.css";
function Array() {
  return (
    <>
      <SideMenu />
      <main>
        <article>
          <h2>Array</h2>
          <p>
            Arrays are an important data structure in JavaScript that allow you
            to store multiple values in a single variable. You can think of an
            array as a list of items, where each item has a numeric index
            starting from 0.
          </p>
        </article>
        <article>
          <p>
            <b>Creating an Array:</b> To create an array in JavaScript, you can
            use the array literal notation, which involves enclosing the list of
            values within square brackets ([]). Here's an example:
          </p>
          <CodeBox>let fruits = ["apple", "banana", "orange"];</CodeBox>
          <p>
            In this example, we've created an array called <b>fruits</b>{" "}
            containing three strings: "apple", "banana", and "orange"
          </p>
        </article>
        <article>
          <p>
            <b>Accessing Array Elements:</b> You can access individual elements
            of an array using their index. The index starts from 0, so the first
            element is at index 0, the second element is at index 1, and so on.
            Here's an example:
          </p>
          <CodeBox>
            console.log(fruits[0]); // Output: "apple" <br />
            console.log(fruits[1]); // Output: "banana" <br />
            console.log(fruits[2]); // Output: "orange"
          </CodeBox>
        </article>
        <article>
          <p>
            <b>Modifying Array Elements:</b>
            You can modify array elements by assigning new values to specific
            indexes. Here's an example:
          </p>
          <CodeBox>
            fruits[1] = "grape"; <br />
            console.log(fruits); // Output: ["apple", "grape", "orange"]
          </CodeBox>
          <p>
            In this example, we changed the second element of the <b>fruits</b>{" "}
            array from "banana" to "grape".
          </p>
        </article>
        <article>
          <p>
            <b>Array Length:</b>
            You can determine the length of an array using the length property.
            Here's an example:
          </p>
          <CodeBox>console.log(fruits.length); // Output: 3</CodeBox>
          <p>
            <b>Useful Array Methods:</b>
            JavaScript provides several built-in methods for manipulating
            arrays. Here are a few commonly used ones:
          </p>
          <ol>
            <li>
              <b>push</b>: Adds one or more elements to the end of an array.
            </li>
            <CodeBox>
              fruits.push("mango"); <br />
              console.log(fruits); // Output: ["apple", "grape", "orange",
              "mango"]
            </CodeBox>
            <li>
              <b>pop:</b> Removes the last element from an array and returns it.
            </li>
            <CodeBox>
              let lastFruit = fruits.pop(); <br />
              console.log(lastFruit); // Output: "mango" <br />
              console.log(fruits); // Output: ["apple", "grape", "orange"]
            </CodeBox>
            <li>
              <b>splice:</b> Adds or removes elements from an array at a
              specific index.
            </li>
            <CodeBox>
              fruits.splice(1, 0, "pear"); <br />
              console.log(fruits); // Output: ["apple", "pear", "grape",
              "orange"] <br /> <br />
              fruits.splice(2, 1);
              <br />
              console.log(fruits); // Output: ["apple", "pear", "orange"]
            </CodeBox>
            <li>
              <b>concat:</b> Combines two or more arrays and returns a new
              array.
            </li>
            <CodeBox>
              let moreFruits = ["kiwi", "pineapple"];
              <br />
              let allFruits = fruits.concat(moreFruits); <br />
              console.log(allFruits); <br />
              // Output: ["apple", "pear", "orange", "kiwi", "pineapple"]
            </CodeBox>
          </ol>
        </article>
      </main>
    </>
  );
}

export default Array;
