import "../codebox/style-codebox.css";
function CodeBox({ children }) {
  return (
    <pre className="codebox">
      <code className="code">{children}</code>
    </pre>
  );
}

export default CodeBox;
