import CodeBox from "../../components/codebox/CodeBox";
import SideMenu from "../../components/sidemenu/SideMenu";
import "../style-page.css";
export function FlowControl() {
  return (
    <>
      <SideMenu />
      <main>
        <article>
          <h2> Flow Control Structures in JavaScript:</h2>
          <p>
            Flow control structures allow you to control the flow of execution
            in a JavaScript program. They determine the order in which
            statements are executed based on certain conditions. JavaScript
            provides several flow control structures, including:
          </p>
        </article>
        <article>
          {" "}
          <ol>
            <li>
              <b>Conditional Statements:</b> Conditional statements are used to
              perform different actions based on different conditions.
              JavaScript includes <b>if</b>, <b>if...else</b>, <b>else if</b>,
              and <b>switch</b> statements.
            </li>
            <ul>
              <li>
                The <b>if</b> statement executes a block of code if a specified
                condition is true.
              </li>
              <CodeBox>
                if (condition) {"{"}
                <br />
                // code to be executed if the condition is true <br />
                {"}"}
              </CodeBox>
              <li>
                The <b>if...else</b> statement executes a block of code if a
                condition is true, and a different block of code if the
                condition is false.
              </li>
              <CodeBox>
                if (condition) {"{"} <br />
                // code to be executed if the condition is true <br />
                {"}"} else {"{"} <br />
                // code to be executed if the condition is false <br />
                {"}"}
              </CodeBox>
              <li>
                The <b>switch</b> statement evaluates an expression and executes
                code blocks based on different cases.
              </li>
              <CodeBox>
                switch (expression) {"{"} <br />
                case value1: <br />
                // code to be executed if expression matches value1 <br />
                break; <br />
                <br />
                case value2: <br />
                // code to be executed if expression matches value2 <br />
                break;
                <br />
                <br />
                default: <br />
                // code to be executed if expression doesn't match any case{" "}
                <br />
                {"}"}
              </CodeBox>
            </ul>
            <li>
              <b>Loops:</b>
              Loops are used to repeat a block of code multiple times.
              JavaScript provides <b>for</b>, <b>while</b>, and{" "}
              <b>do...while</b> loops.
            </li>
            <ul>
              <li>
                The <b>for</b> loop executes a block of code a specific number
                of times.
              </li>
              <CodeBox>
                for (initialization; condition; increment/decrement) {"{"}{" "}
                <br />
                // code to be executed in each iteration <br />
                {"}"}
              </CodeBox>
              <li>
                The <b>while</b> loop executes a block of code as long as a
                specified condition is true.
              </li>
              <CodeBox>
                while (condition) {"{"} <br />
                // code to be executed as long as the condition is true <br />
                {"}"}
              </CodeBox>
              <li>
                The <b>do...while</b> loop is similar to the <b>while</b> loop,
                but it always executes the block of code at least once before
                checking the condition.
              </li>
              <CodeBox>
                do {"{"} <br />
                // code to be executed at least once
                <br />
                {"}"} while (condition);
              </CodeBox>
            </ul>
            <li>
              <b>Control Statements:</b>
              Control statements allow you to alter the normal flow of
              execution. JavaScript includes <b>break</b> and <b>continue</b>{" "}
              statements.
            </li>
            <ul>
              <li>
                The <b>break</b> statement is used to terminate a loop or switch
                statement and exit the block.
              </li>
              <CodeBox>
                for (let i = 0; i {"<"} 5; i++) {"{"} <br />
                if (i === 3) {"{"} <br />
                break; // exits the loop when i is 3{"}"} <br />
                // code to be executed <br />
                {"}"}
              </CodeBox>
              <li>
                The <b>continue</b> statement is used to skip the current
                iteration of a loop and move to the next iteration.
              </li>
              <CodeBox>
                for (let i = 0; i {"{"} 5; i++) {"{"} <br />
                if (i === 3) {"{"} <br />
                continue; // skips the iteration when i is 3{"}"} <br />
                // code to be executed <br />
                {"}"}
              </CodeBox>
            </ul>
          </ol>
        </article>
      </main>
    </>
  );
}

export default FlowControl;
