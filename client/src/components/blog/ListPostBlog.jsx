import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import { get_bloglistpost } from "../../redux/actions/blog";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListPostBlog({get_bloglistpost, results}){
    const navigate = useNavigate()

    useEffect(() => {
        
        get_bloglistpost()
    
    }, [get_bloglistpost])

    const handleBrandClick = (route) => {
        navigate(route)
    }

    return(
        <section className="container pt-5">
            <div className="pt-5">
                <div className="d-flex justify-content-center mt-5 text-light">
                    <h2>Tus mejores articulos y tutoriales de programación</h2>
                </div>

                <section className="mt-5">
                    <Row>
                    {
                        results && results.map((item, index) => (
                            
                                <Col>
                                <Card className="bg-black text-light border " style={{ width: '18rem', height: '18rem' }} key={index}>
                                    <Card.Body>
                                      <Card.Title>{item.title}</Card.Title>
                                      <Card.Subtitle className="mb-2 text-muted">{item.authors}</Card.Subtitle>
                                      <Card.Text className="">
                                        {item.header}
                                      </Card.Text>
                                      <div className="position-absolute bottom-0 start-0 m-3">
                                        
                                        <Button  variant="outline-light" onClick={() => handleBrandClick(`/post/${item.slug}/`)}>Leer</Button>
                                        
                                      </div>
                                    </Card.Body>
                                </Card>
                                </Col>
                                 
                        ))
                    }
                    </Row>
                </section>
            </div>
            
        </section>
    )
}

const mapStateToProps = state => ({
    results: state.Blog.results
})

export default connect(mapStateToProps, {
    get_bloglistpost

})(ListPostBlog);