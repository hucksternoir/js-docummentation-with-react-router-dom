import { Link } from "react-router-dom";
import "./style-sidemenu.css";
import DropDownMenu from "../dropdown/DropDownMenu";
function SideMenu() {
  function DropdownItem(props) {
    return (
      <li className="sub-option">
        <Link to={props.to}>{props.text}</Link>
      </li>
    );
  }
  return (
    <aside>
      <div id="title-menu">
        <h1>JS Basic Documentation</h1>
      </div>
      <nav id="menu-options">
        <ul>
          <li className="option">
            <Link to={"/"}>Introduction</Link>
          </li>
          <DropDownMenu text={"Basic Sintax"}>
            <DropdownItem
              to={"/basic-sintax/variables-and-data-types"}
              text={"Variables and Data Types"}
            />
            <DropdownItem to={"/basic-sintax/operators"} text={"Operators"} />
            <DropdownItem
              to={"/basic-sintax/flow-control-structure"}
              text={"Flow Control Structure"}
            />
            <DropdownItem
              to={"/basic-sintax/functions-and-scope"}
              text={"Functions and Scope"}
            />
          </DropDownMenu>
          <DropDownMenu text={"Document Object Model"}>
            <DropdownItem
              to={"/document-object-model/what-is-dom"}
              text={"What is DOM?"}
            />
            <DropdownItem
              to={"/document-object-model/selecting-element"}
              text={"Selecting Element"}
            />
            <DropdownItem
              to={"/document-object-model/modifcation"}
              text={"Modifying Element"}
            />
            <DropdownItem
              to={"/document-object-model/event-handling"}
              text={"Event Handling"}
            />
          </DropDownMenu>
          <DropDownMenu text={"Arrays and Objects"}>
            <DropdownItem to={"/arrays-and-objects/arrays"} text={"Arrays"} />
            <DropdownItem to={"/arrays-and-objects/objects"} text={"Objects"} />
            <DropdownItem to={"/arrays-and-objects/json"} text={"JSON"} />
          </DropDownMenu>
          <DropDownMenu text={"Advanced Functions"}>
            <DropdownItem
              text={"Higher Order Functions"}
              to={"/advanced-functions/high-order-functions"}
            />
            <DropdownItem
              text={"Callbacks and Promises"}
              to={"/advanced-functions/callbacks-and-promises"}
            />
            <DropdownItem
              text={"Arrow Functions"}
              to={"/advanced-functions/arrow-functions"}
            />
            <DropdownItem
              text={"Closures"}
              to={"/advanced-functions/closures"}
            />
          </DropDownMenu>
        </ul>
      </nav>
    </aside>
  );
}

export default SideMenu;
