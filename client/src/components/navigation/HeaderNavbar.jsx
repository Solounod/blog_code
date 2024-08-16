import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from "react-redux";
import { load_user, logout } from "../../redux/actions/auth";

import NavDropdown from 'react-bootstrap/NavDropdown';


function HeaderNavbar ({
    isAuthenticated,
    logout,
    user,
    load_user
}) {
    const navigate = useNavigate()

    const [redirect, setRedirect] = useState(false);

    const [prevScrollTop, setPrevScrollTop] = useState(0);
    const [currentScrollTop, setCurrentScrollTop] = useState(0);


    const linkLoginSingup = (
        <Nav className="ms-auto fw-bolder size-text-nav text-black ">
            <Nav.Link className="text-light px-3  hover-nav" onClick={() => handleBrandClick("/Registrar")}>Registrar</Nav.Link>
            <Nav.Link className="text-light px-3  hover-nav" onClick={() => handleBrandClick("/login")}>Iniciar sesion</Nav.Link>  
        </Nav>
        )
    
    const logoutHandler = () => {
        logout()
        setRedirect(true)
    }

    useEffect(() => {
        if (isAuthenticated) {
            load_user();
        }
    }, [isAuthenticated, load_user]);

    const linkLogoutAndUsername = (
        <Nav className="ms-auto fw-bolder size-text-nav text-light ">
            
            {user?.username && <Nav.Link className="text-light px-3  hover-nav" onClick={() => handleBrandClick(`/Profile`)}>{user.username}</Nav.Link>}
            <Nav.Link className="text-light px-3  hover-nav" onClick={() => logoutHandler()}>Cerrar sesion</Nav.Link>  
        </Nav>
    )

    if (redirect){
        window.location.reload(false)
        return navigate('/');
      }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.body.parentNode.scrollTop;
            const headerHeight = document.querySelector('.header').offsetHeight;

            setCurrentScrollTop(scrollTop);

            if (prevScrollTop < currentScrollTop && scrollTop > headerHeight * 2) {
                document.querySelector('.header').classList.add('scrollUp');
            } else if (prevScrollTop > currentScrollTop && !(scrollTop <= headerHeight)) {
                document.querySelector('.header').classList.remove('scrollUp');
            }

            setPrevScrollTop(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        //clear component
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollTop, currentScrollTop]);

    const handleBrandClick = (route) => {
        navigate(route)
    }


    return(
        <header className="expand-header fixed-top header ">
            <Navbar expand="lg" className="p-3 bg-black " >
                <Container>
                    <Navbar.Brand className="text-light" onClick={() => handleBrandClick("/")}>SpaceOfCoder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
                    <Navbar.Collapse id="basic-navbar-nav" className="">
                        <Nav className="me-auto fw-bolder size-text-nav text-light">
                            <Nav.Link className="text-light px-3  hover-nav" onClick={() => handleBrandClick("/")}>Inicio</Nav.Link>
                            <Nav.Link className="text-light px-3  hover-nav" onClick={() => handleBrandClick("/categoria")}>Categorias blog</Nav.Link>
                            <Nav.Link className="text-light px-3  hover-nav" onClick={() => handleBrandClick("/contacto")}>Contacto</Nav.Link>
                        </Nav>
                        {
                            isAuthenticated ? linkLogoutAndUsername:linkLoginSingup
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
       
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user

})

export default connect(mapStateToProps, {
    logout,
    load_user
})(HeaderNavbar)