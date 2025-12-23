import { CarouselMain } from "./CarouselMain"
import Button from 'react-bootstrap/Button'; 

export function Header (){

    return(
        <section className="position-relative mt-5 pt-4">
            <div className="container py-5">
                <div className="row align-items-center g-5"> 
                    <div className="col-lg-6 text-start text-light">
                        <div className="mb-4">
                            <span className="badge bg-secondary mb-2">Bienvenido a SpaceOfCoder</span>
                            <h1 className="display-4 fw-bolder lh-1 mb-3">
                                Tus mejores artículos y tutoriales de <span className="text-info">programación.</span>
                            </h1>
                            <p className="lead text-white-50 mb-4">
                                Un lugar diseñado para compartir conocimientos, aprender nuevas tecnologías y conectar con personas apasionadas por el código.
                            </p>
                            
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <CarouselMain/>
                    </div>
                </div>
            </div>
        </section>
    )
}