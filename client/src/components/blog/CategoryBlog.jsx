import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import { get_categories } from "../../redux/actions/blog";
import ListGroup from 'react-bootstrap/ListGroup';




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
                <h2>
                    Categorias del Blog
                </h2>
            </div>
            <ListGroup>
            {
                results ? results.map(category => (
                   
                        <ListGroup.Item key={category.id}>
                            <div >
                                {category.category_blog}
                                {console.log(category.slug_category)}
                            </div>
                            <button onClick={() => handleBrandClick(`/categoria/${category.slug_category}/`)}>Ver</button>
                        </ListGroup.Item>
                    
                    
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