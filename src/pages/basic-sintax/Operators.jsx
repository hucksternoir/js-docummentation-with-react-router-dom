import CodeBox from "../../components/codebox/CodeBox";
import SideMenu from "../../components/sidemenu/SideMenu";
export function Operators() {
  return (
    <>
      <SideMenu />
      <main>
        <article>
          <h2>Operators in JavaScript:</h2>
          <p>
            Operators are symbols or keywords in JavaScript that perform
            operations on values or variables. They allow you to perform
            calculations, assign values, compare values, and more. JavaScript
            supports various types of operators, including:
          </p>
        </article>
        <article>
          <ol>
            <li>
              <p>
                <b>Arithmetic Operators:</b>
                Arithmetic operators are used to perform mathematical
                calculations on numeric values. JavaScript includes operators
                such as addition (<b>+</b>), subtraction (<b>-</b>),
                multiplication (<b>*</b>), division (<b>/</b>), and modulus (
                <b>%</b>). Example:
              </p>
            </li>
            <CodeBox>
              let x = 10; <br />
              let y = 5;
              <br />
              <br />
              let addition = x + y; // 15 <br />
              let subtraction = x - y; // 5 <br />
              let multiplication = x * y; // 50 <br />
              let division = x / y; // 2 <br />
              let modulus = x % y; // 0
            </CodeBox>
            <li>
              <p>
                <b>Assignment Operators:</b>
                Assignment operators are used to assign values to variables. The
                most common assignment operator is the equals sign (<b>=</b>),
                but JavaScript also provides shorthand assignment operators like{" "}
                <b>+=</b>,<b>-=</b>, <b>*=</b>, <b>/=</b>, and <b>%=</b>.
                Example:
              </p>
            </li>
            <CodeBox>
              let x = 10; <br />
              <br />
              x += 5; // equivalent to x = x + 5; <br />
              x -= 3; // equivalent to x = x - 3;
              <br />
              x *= 2; // equivalent to x = x * 2;
              <br />
              x /= 4; // equivalent to x = x / 4;
              <br />x %= 3; // equivalent to x = x % 3;
            </CodeBox>
            <li>
              <b>Comparison Operators:</b> Comparison operators are used to
              compare values and return a boolean result (<b>true</b> or{" "}
              <b>false</b>). They are often used in conditional statements and
              loops. JavaScript provides comparison operators such as equal to (
              <b>==</b> or <b>===</b> ), not equal to (<b>!=</b> or <b>!==</b>),
              greater than (<b>{">"}</b>), less than (<b>{"<"}</b>), greater
              than or equal to (<b>{">="}</b>), and less than or equal to (
              <b>{"<="}</b>). Example:
            </li>
            <CodeBox>
              let x = 5; <br />
              let y = 10; <br />
              <br />
              console.log(x == y); // false <br />
              console.log(x != y); // true <br />
              console.log(x {">"} y); // false <br />
              console.log(x {"<"} y); // true <br />
              console.log(x {">="} y); // false <br />
              console.log(x {"<="} y); // true <br />
            </CodeBox>
            <li>
              <p>
                <b>Logical Operators:</b>
                Logical operators are used to combine multiple conditions and
                perform logical operations. JavaScript includes logical
                operators such as AND (<b>&&</b>), OR (|<b>|</b>), and NOT (
                <b>!</b>). Example:
              </p>
            </li>
            <CodeBox>
              let x = 5; <br />
              let y = 10; <br />
              <br />
              console.log(x {">"} 0 && y {"<"} 20); // true <br />
              console.log(x {">"} 0 || y {">"} 20); // true <br />
              console.log(!(x {">"} 0)); // false <br />
            </CodeBox>
            <li>
              <b>Unary Operators</b>: Unary operators act on a single operand.
              JavaScript includes unary operators such as increment (<b>++</b>),
              decrement (-<b>-</b>), negation (<b>-</b>), and logical NOT (
              <b>!</b>). Example:
            </li>
            <CodeBox>
              let x = 5; <br />
              <br />
              console.log(++x); // 6 <br />
              console.log(--x); // 5 <br />
              console.log(-x); // -5 <br />
              console.log(!true); // false
            </CodeBox>
          </ol>
        </article>
        <p>
          These are some of the commonly used operators in JavaScript. Including
          explanations, examples, and code snippets will help users understand
          and utilize operators effectively in their JavaScript code.
        </p>
      </main>
    </>
  );
}

export default Operators;
