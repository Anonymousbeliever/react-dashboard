import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Bell, Globe, ThreeDotsVertical } from "react-bootstrap-icons"

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom fixed-top header-style">
      <Navbar.Brand href="#home" className="ml-3">
      <strong className="ms-3 h4 mb-0" style={{ color: "#32CD32", fontSize: "25px", fontWeight: "900" }}> WEBSACCO</strong> 
      <span style={{ fontSize: "25px", marginLeft: "40px", fontWeight: "500" }}>  Test Sacco 100 - Chair Person</span> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#notifications">
            <Bell />
          </Nav.Link>
          <NavDropdown
            title={
              <>
                <Globe /> English
              </>
            }
            id="language-dropdown"
          >
            <NavDropdown.Item href="#english">English</NavDropdown.Item>
            <NavDropdown.Item href="#french">French</NavDropdown.Item>
            <NavDropdown.Item href="#spanish">Spanish</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#profile" className="bg-primary text-white rounded-circle mx-2">
            S1
          </Nav.Link>
          <Nav.Link href="#more">
            <ThreeDotsVertical />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header

