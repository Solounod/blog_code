import { useEffect } from "react";
import { connect } from "react-redux";
import { get_categories } from "../../redux/actions/blog";



function CategoryBlog({ get_categories, results}){

    useEffect(() => {
        get_categories()

    }, [])

    return (
        <div>
            {
                results ? results.map(category => (
                    <div>
                        {category.category_blog}
                    </div>
                )):<>hola</>
            }

        </div>

    )
}

const mapStateToProps = state => ({
    results: state.Blog.results
})

export default connect(mapStateToProps, {
    get_categories
})(CategoryBlog)