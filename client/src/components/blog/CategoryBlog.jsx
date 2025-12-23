import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { get_categories } from "../../redux/actions/blog";

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

function CategoryBlog({ get_categories, results }) {
    const navigate = useNavigate();

    useEffect(() => {
        get_categories();
    }, [get_categories]);

    const handleCategoryClick = (slug) => {
        navigate(`/categoria/${slug}/`);
    };

    return (
        <section className="container mt-5 pt-5 pb-5">
            {/* Encabezado de Sección */}
            <div className="text-center mb-5">
                <p className="text-info text-uppercase letter-spacing-2 mb-2">Explorar</p>
                <h2 className="fw-bold text-light display-5">Categorías & Tecnologías</h2>
                <p className="text-white-50 mt-3">
                    Encuentra tutoriales específicos filtrados por tu tecnología favorita.
                </p>
            </div>

            {/* Grilla de Categorías */}
            <div className="mt-4">
                {results ? (
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {results.length > 0 ? (
                            results.map((category) => (
                                <Col key={category.id}>
                                    <Card 
                                        className="bg-black text-light border border-secondary h-100 category-card"
                                        style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                                        onClick={() => handleCategoryClick(category.slug_category)}
                                    >
                                        <Card.Body className="d-flex align-items-center justify-content-between p-4">
                                            <div>
                                                <h4 className="fw-bold mb-1">{category.category_blog}</h4>
                                                <small className="text-white-50">Ver tutoriales</small>
                                            </div>
                                            
                                            {/* Icono de flecha simulado con CSS o Bootstrap Icon si tienes */}
                                            <div className="icon-arrow text-light bg-dark rounded-circle p-2 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                                </svg>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <div className="text-center w-100 text-white-50">
                                <p>No se encontraron categorías disponibles.</p>
                            </div>
                        )}
                    </Row>
                ) : (
                    // Estado de Carga
                    <div className="d-flex justify-content-center py-5">
                        <Spinner animation="border" variant="light" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </Spinner>
                    </div>
                )}
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    results: state.Blog.results
})

export default connect(mapStateToProps, {
    get_categories
})(CategoryBlog);