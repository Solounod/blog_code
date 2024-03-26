import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import { get_bloglistOfCategory } from "../../redux/actions/blog";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function BlogListOfCategory({get_bloglistOfCategory, results}){
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (params.slug_category){
            get_bloglistOfCategory(params.slug_category)
        }
    }, [params.slug_category, get_bloglistOfCategory])
    
    const handleBrandClick = (route) => {
        navigate(route)
    }

    return(
        <section className="container mt-5">
            <div className="mt-5 pt-5">
                <div className="pt-5">
                    <h2>Post de {params.slug_category}</h2>
                </div>
           {results && results.map((item, index) => (
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
            ))}
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    results: state.Blog.results
})

export default connect(mapStateToProps, {
    get_bloglistOfCategory

})(BlogListOfCategory);