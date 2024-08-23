import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import { get_bloglistpost } from "../../redux/actions/blog";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function ListPostBlog({get_bloglistpost, results}){
    const navigate = useNavigate()

    useEffect(() => {
        
        get_bloglistpost()
    
    }, [get_bloglistpost])

    const handleBrandClick = (route) => {
        navigate(route)
    }

    return(
        <section className="container ">
            <div className="">
                <div className="d-flex justify-content-center mt-1 text-light">
                    <h2 className="fw-bold fs-1">Explora los mejores articulos</h2>
                </div>

                <section className="mt-5">
                    <Row>
                    {
                        results && results.map((item, index) => (
                            
                            <Col xs={12} md={6} lg={4}>
                                <div>
                                    <div className="d-flex justify-content-center">  
                                        <Card className="bg-black text-light border mt-md-4 mt-sm-4 mt-2" style={{ width: '18rem', height: '18rem' }} key={index}>
                                            <Card.Header className="border-bottom h-25 d-inline-block">
                                                <Card.Title className="pt-1">{item.title}</Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className="row">
                                                    <Card.Subtitle className="mb-2 text-muted col">{item.authors}</Card.Subtitle>
                                                    <Card.Subtitle className="mb-2 text-muted col">{item.date_publisher}</Card.Subtitle>
                                                </div>
                                                <Card.Text className=" overflow-y-hidden" style={{width: '17rem', height: '7rem' }}>
                                                
                                                  {item.header}
                                                  
                                                </Card.Text>
                                                <div className="position-absolute bottom-0 start-0 m-3">
                                                    <Button  variant="outline-light" onClick={() => handleBrandClick(`/post/${item.slug}/`)}>Leer</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>  
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