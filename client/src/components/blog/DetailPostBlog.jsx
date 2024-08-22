import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import { get_postblogdetail } from "../../redux/actions/blog";
import ProfileUtilitiesSaveUpdatepost from "../profileutilities/ProfileUtilitiesSaveUpdatepost";


function DetailPostBlog({ get_postblogdetail, result }) {
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(params.slug){
            get_postblogdetail(params.slug)    
        }
    },[get_postblogdetail, params.slug])

    console.log(result);
    

    return(
        <section className="container mt-5">
            <div className="mt-5 pt-5">
           {
                result ? 
                <div className="mt-5 text-light ">
                    <div className="d-flex justify-content-center mt-5 ">
                        <h2>{result.title}</h2>
                        
                    </div>
                    <ProfileUtilitiesSaveUpdatepost postId={result.id}/>
                    <div>
                        <p>{result.authors}</p>
                        <p>{result.header}</p>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: result.description}}>

                    </div>
                    <ProfileUtilitiesSaveUpdatepost postId={result.id}/>
                    
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