import "../sidemenu/style-sidemenu.css";

function DropdownItem(props) {
  return (
    <li className="sub-option">
      <Link to={props.to}>{props.text}</Link>
    </li>
  );
}

export default DropdownItem;
