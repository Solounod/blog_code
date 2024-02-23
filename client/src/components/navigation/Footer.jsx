import { useNavigate } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


export function Footer() {
    const navigate = useNavigate()

    const handleBrandClick = (route) => {
        navigate(route)
    }

    return (
        <footer>
            <div className="container py-5 border-bottom z-index-20 position-relative">
                <div className="row pt-5 gy-4">
                    <div className="col-lg-3 col-md-6 text-start">
                        <img src="" alt="imagen-logo" />
                        <ul className="list-unstyled text-muted">
                            <li><a className="reset-anchor text-sm" href="">contacto@gmail.cl</a></li>
                            <li><a className="reset-anchor text-sm" href="">+569999999999</a></li>
                        </ul>
                        <ul className="list-inline text-muted">
                            <li className="list-inline-item" ><a className="reset-anchor" href="https://www.facebook.com/"><FaFacebookF size={20} /></a></li>
                            <li className="list-inline-item" ><a className="reset-anchor" href="https://www.instagram.com/"><FaInstagram size={20} /></a></li>
                            <li className="list-inline-item" ><a className="reset-anchor" href="https://twitter.com/"><FaTwitter size={20} /></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 text-start">
                        <h4>Navegacion</h4>
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-1"><a className="text-sm reset-anchor hover-nav hover-pointer" onClick={() => handleBrandClick("/")}>Home</a></li>
                            <li className="mb-1"><a className="text-sm reset-anchor hover-nav hover-pointer" onClick={() => handleBrandClick("/aboutme")}>About me</a></li>
                            <li className="mb-1"><a className="text-sm reset-anchor hover-nav hover-pointer" onClick={() => handleBrandClick("/service")}>Service</a></li>
                            <li className="mb-1"><a className="text-sm reset-anchor hover-nav hover-pointer" onClick={() => handleBrandClick("/contact")}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 text-start">
                        <h4>Servicios</h4>
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-1">Algun servicio</li>
                            <li className="mb-1">Algun servicio</li>
                            <li className="mb-1">Algun servicio</li>
                            <li className="mb-1">Algun servicio</li>
                            <li className="mb-1">Algun servicio</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 text-start">
                        <h4>Oficinas</h4>
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-1">Direccion 1</li>
                            <li className="mb-1">Direccion 2</li>
                            <li className="mb-1">Direccion 3</li>
                            <li className="mb-1">Direccion 4</li>
                        </ul>
                    </div>
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