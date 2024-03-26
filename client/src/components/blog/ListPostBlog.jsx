import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import { get_bloglistpost } from "../../redux/actions/blog";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ListPostBlog({get_bloglistpost, results}){
    const navigate = useNavigate()

    useEffect(() => {
        
        get_bloglistpost()
    
    }, [get_bloglistpost])

    const handleBrandClick = (route) => {
        navigate(route)
    }

    return(
        <section className="container">
            <div className="pt-5">
                <div className="d-flex justify-content-center mt-5">
                    <h2>Tus mejores blog de programacion</h2>
                </div>
            {
                results && results.map((item, index) => (
                    <div>
                        <Card style={{ width: '18rem' }} key={index}>
                            <Card.Body>
                              <Card.Title>{item.title}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">{item.authors}</Card.Subtitle>
                              <Card.Text>
                                {item.header}
                              </Card.Text>
                              <Button variant="primary" onClick={() => handleBrandClick(`/post/${item.slug}/`)}>Leer</Button>
                            </Card.Body>
                        </Card>
                    </div>        
                ))
            }
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