import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import { get_bloglistpost } from "../../redux/actions/blog";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge'; // Para decorar categorías o fechas

function ListPostBlog({ get_bloglistpost, results }) {
    const navigate = useNavigate();
    
    // Agregamos el candado useRef para evitar el bucle infinito del que hablamos antes
    const dataFetchedRef = useRef(false);

    useEffect(() => {
        if (!dataFetchedRef.current) {
            dataFetchedRef.current = true;
            get_bloglistpost();
        }
    }, [get_bloglistpost]);

    const handleBrandClick = (route) => {
        navigate(route);
    }

    return (
        <section className="container py-5">
            {/* Título de Sección con diseño limpio */}
            <div className="text-center text-light mb-5">
                <p className="text-info text-uppercase letter-spacing-2 mb-2">Blog & Tutoriales</p>
                <h2 className="fw-bold display-5">Explora el conocimiento</h2>
            </div>

            <Row xs={1} md={2} lg={3} className="g-4"> 
            {/* g-4 crea el espaciado perfecto entre columnas y filas */}
                
                {results && results.map((item, index) => (
                    <Col key={index}>
                        {/* h-100 hace que la tarjeta ocupe todo el alto disponible de la fila */}
                        <Card className="bg-black text-light border-secondary h-100 shadow-sm hover-card">
                            
                            <Card.Body className="d-flex flex-column">
                                {/* Encabezado de la tarjeta: Fecha y Autor */}
                                <div className="d-flex justify-content-between align-items-center mb-3 text-white-50 small">
                                    <span>By {item.authors || 'Admin'}</span>
                                    <Badge bg="dark" className="border border-secondary fw-normal">
                                        {item.date_publisher}
                                    </Badge>
                                </div>

                                <Card.Title className="fw-bold fs-4 mb-3 text-white">
                                    {item.title}
                                </Card.Title>

                                {/* Descripción con truncado elegante (3 líneas) */}
                                <Card.Text 
                                    className="text-white-50 flex-grow-1"
                                    style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}
                                >
                                    {item.header}
                                </Card.Text>

                                {/* Botón al final, siempre alineado abajo gracias a flex-grow-1 arriba */}
                                <div className="mt-4 pt-3 border-top border-secondary">
                                    <Button 
                                        variant="outline-light" 
                                        className="w-100"
                                        onClick={() => handleBrandClick(`/post/${item.slug}/`)}
                                    >
                                        Leer artículo completo
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    )
}

const mapStateToProps = state => ({
    results: state.Blog.results
})

export default connect(mapStateToProps, {
    get_bloglistpost
})(ListPostBlog);