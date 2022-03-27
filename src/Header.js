import { Nav, Navbar, Container } from "react-bootstrap";
function Header() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Form Example</Navbar.Brand>
                <Nav>
                    <Nav.Link href="https://github.com/ABIDULLAH786/">My Git Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  );
}
export default Header;
