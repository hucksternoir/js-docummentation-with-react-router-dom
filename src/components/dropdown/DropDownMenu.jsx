import { useState } from "react";
import "../sidemenu/style-sidemenu.css";

function DropDownMenu({ text, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li
        className="option toggle-dropdown"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <a className="buttonFlex">
          <span>{text}</span> <span>{isOpen ? "-" : "+"}</span>
        </a>
        <ul
          id="submenu-1"
          className={`submenu ${isOpen ? "active" : "desactive"}`}
        >
          {children}
        </ul>
      </li>
    </>
  );
}
export default DropDownMenu;
