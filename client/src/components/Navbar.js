// import {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, 
    Nav, NavItem, NavLink, Container} from 'reactstrap';
const Navigation = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(prev => !prev);
    // }
    return(
        <div>
            <Navbar className="mb-5" color="dark" dark expand="md">
                <Container>
                    <NavbarBrand href="/">Shopping List</NavbarBrand>
                    <NavbarToggler></NavbarToggler>
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/bilal05476">
                                    GitHub
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;