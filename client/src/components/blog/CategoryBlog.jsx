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
            <div className="mt-5">
                <div className="d-flex justify-content-center mt-1 text-light">
                    <h2 className="fw-bold fs-1">
                        Categorias del Blog
                    </h2>
                </div>
            </div>
            <div className="mt-5 ">
            {
                results ? results.map(category => (
                   <div className="border ">
                        <div className=" " key={category.id}>
                            <div className="row  ">
                                <div className="col">
                                <div className="text-light">
                                    <div className="d-flex justify-content-center bg-black p-2">
                                    <h4>{category.category_blog}</h4>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-6 ">
                                    <div>
                                        <div className="d-flex justify-content-center p-2">
                                    <Button onClick={() => handleBrandClick(`/categoria/${category.slug_category}/`)} variant='outline-light'>Ver</Button>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                )):<>hola</>
            }
            </div>

        </section>

    )
}

const mapStateToProps = state => ({
    results: state.Blog.results
})

export default connect(mapStateToProps, {
    get_categories
})(CategoryBlog)