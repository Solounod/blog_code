import { useNavigate } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


export function Footer() {
    const navigate = useNavigate()

    const handleBrandClick = (route) => {
        navigate(route)
    }

    return (
        <footer className="bg-black border-top mt-5">
            <div className="container py-5 border-bottom z-index-20 position-relative ">
                <div className="row pt-5 gy-4">
                    <div className="col-lg-3 col-md-6 text-start">
                    <img className='d-block w-50' src="../../public/logo3.png" alt="" />
                        
                      
                    </div>
                    <div className="col-lg-3 col-md-6 text-start text-light">
                        <h4>Navegacion</h4>
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-1"><a className="text-sm text-light reset-anchor hover-nav hover-pointer text-decoration-none" onClick={() => handleBrandClick("/")}>Inicio</a></li>
                            <li className="mb-1"><a className="text-sm text-light reset-anchor hover-nav hover-pointer text-decoration-none" onClick={() => handleBrandClick("/categoria")}>Categorias blog</a></li>
                            <li className="mb-1"><a className="text-sm text-light reset-anchor hover-nav hover-pointer text-decoration-none" onClick={() => handleBrandClick("/contacto")}>Contacto</a></li>
                        </ul>
                    </div>
                    <ul className="list-inline text-muted">
                            <li className="list-inline-item" ><a className="reset-anchor" href="https://www.facebook.com/"><FaFacebookF size={20} /></a></li>
                            <li className="list-inline-item" ><a className="reset-anchor" href="https://www.instagram.com/"><FaInstagram size={20} /></a></li>
                            <li className="list-inline-item" ><a className="reset-anchor" href="https://twitter.com/"><FaTwitter size={20} /></a></li>
                        </ul>
                </div>
            </div>
            <div className="container py-4 z-index-20 position-relative">
                <div className="row text-center">
                    <div className="col-lg-12 p-lg-0 text-lg-center">
                        <p className="text-muted text-sm mb-0">@2024 Nombre empresa, All Rights Reserved.</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}