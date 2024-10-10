import { useNavigate } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


export function Footer() {
    const navigate = useNavigate()

    const handleBrandClick = (route) => {
        navigate(route)
    }

    return (
        <footer className="bg-black border-top mt-5">
            <div className="container py-5 border-bottom z-index-20 position-relative d ">
                <div className="row pt-5 gy-4">
                    
                        
                    <div className="col-lg-6 col-md-6 text-start">
                        <div>
                            <div className="d-flex justify-content-center">
                                <img className='d-block w-50' src="/static/logo3.png" alt="" />
                            </div>
                        </div>                    
                    </div>
                    <div className="col-lg-6 col-md-6 text-start text-light">
                        <div className="d-flex justify-content-center">
                            <div>
                                <h4>Navegación</h4>
                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-1"><a className="text-sm text-light reset-anchor hover-nav hover-pointer text-decoration-none" onClick={() => handleBrandClick("/")}>Inicio</a></li>
                                    <li className="mb-1"><a className="text-sm text-light reset-anchor hover-nav hover-pointer text-decoration-none" onClick={() => handleBrandClick("/categoria")}>Categorías blog</a></li>
                                    <li className="mb-1"><a className="text-sm text-light reset-anchor hover-nav hover-pointer text-decoration-none" onClick={() => handleBrandClick("/contacto")}>Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div className="container py-4 z-index-20 position-relative">
                <div className="row text-center">
                    <div className="col-lg-12 p-lg-0 text-lg-center">
                        <p className="text-muted text-sm mb-0">@2024 Code of Space, All Rights Reserved.</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}