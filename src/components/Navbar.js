import styles from "./NavBar.module.css";
//components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <div className={styles.main}>
      <Navbar bg="black" variant="dark" expand="lg">
        <Navbar.Brand href="#">
          <img
            src="/photos/logo.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Welcome">Welcome</Nav.Link>
            <Nav.Link href="#SectorsOfActivity">Sectors of activity</Nav.Link>
            <Nav.Link href="#ActivityAroundTheWorld">
              Activity around the world
            </Nav.Link>
            <Nav.Link href="#SocialResponsability">
              Social Responsability
            </Nav.Link>
            <Nav.Link href="#Contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
