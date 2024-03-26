import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import { get_postblogdetail } from "../../redux/actions/blog";

function DetailPostBlog({ get_postblogdetail, result }) {
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(params.slug){
            get_postblogdetail(params.slug)    
        }
    },[get_postblogdetail, params.slug])
    

    return(
        <section className="container">
            <div className="pt-5">
           {
                result ? 
                <div className="mt-5">
                    <div><h2>{result.title}</h2></div>
                    <div>
                        <p>{result.header}</p>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: result.description}}>

                    </div>
                </div>
                    

                :<h1>hola</h1>
            }
            </div>
        
        </section>
    )
}


const mapStateToProps = state => ({
    result: state.Blog.result
})

export default connect(mapStateToProps, {
    get_postblogdetail

})(DetailPostBlog);