import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import { get_categories } from "../../redux/actions/blog";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';




function CategoryBlog({ get_categories, results}){
    const navigate = useNavigate()

    useEffect(() => {
        get_categories()

    }, [])

    const handleBrandClick = (route) => {
        navigate(route)
    }

    return (
        <section className="container mt-5 pt-5">
            <div className="d-flex justify-content-center">
                <h2 className="text-light">
                    Categorias del Blog
                </h2>
            </div>
            <ListGroup className="mt-5">
            {
                results ? results.map(category => (
                   <div >
                        <ListGroup.Item className="bg-dark " key={category.id}>
                            <div className="text-light">
                                <h4>{category.category_blog}</h4>
                                {console.log(category.slug_category)}
                            </div>
                            <Button onClick={() => handleBrandClick(`/categoria/${category.slug_category}/`)} variant='outline-light'>Ver</Button>
                        </ListGroup.Item>
                    </div>
                    
                )):<>hola</>
            }
            </ListGroup>

        </section>

    )
}

const mapStateToProps = state => ({
    results: state.Blog.results
})

export default connect(mapStateToProps, {
    get_categories
})(CategoryBlog)