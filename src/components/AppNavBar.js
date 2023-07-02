import React from "react";
import { AiOutlineInstagram ,AiOutlineTwitter,AiOutlineGithub} from "react-icons/ai";
import { BiLogoLinkedin} from "react-icons/bi";
import {
  // Collapse,
  // Navbar,
  // NavbarToggler,
  // NavbarBrand,
  Nav,
  // NavItem,
  // NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText,
} from "reactstrap";

function AppNavBar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  return (
    <div id='home' style={{ padding: 20 }}>
      {/* <NavbarBrand href="/" style={{}}>
        <h3>Aman Kumar</h3>
      </NavbarBrand> */}
      {"\n"}
      <br></br>

      <Nav fill pills style={{justifyContent:"right"}}>
        <h3 style={{ padding: 7 }}>
          <a href="https://www.instagram.com/aman.ace/">
          <AiOutlineInstagram /> </a>
        </h3>
        <h3 style={{ padding: 7 }}><a
           href="https://www.linkedin.com/in/amankumar-ace/" ><BiLogoLinkedin/> </a>
        </h3>
        <h3 style={{ padding: 7 }}>
          <a href="https://twitter.com/amanace07">
          <AiOutlineTwitter/></a>
        </h3>
        
        <h3 style={{ padding: 7 }}>
        <a href="https://github.com/amanace">
          <AiOutlineGithub /></a>
        </h3>
      </Nav>
    </div>
  );
}

export default AppNavBar;
