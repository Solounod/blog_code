import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import { get_postblogdetail } from "../../redux/actions/blog";
import ProfileUtilitiesSaveUpdatepost from "../profileutilities/ProfileUtilitiesSaveUpdatepost";
import hljs from 'highlight.js';

function DetailPostBlog({ get_postblogdetail, result }) {
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(params.slug){
            get_postblogdetail(params.slug)    
        }
    },[get_postblogdetail, params.slug])

    useEffect(() => {
        // Aplicar el resaltado de sintaxis después de que el contenido se haya renderizado
        hljs.highlightAll();
    }, [result]);

    //console.log(result);
    

    return(
        <section className="container mt-5">
            <div className="mt-5 pt-5">
           {
                result ? 
                <div className="mt-5 text-light ">
                    <ProfileUtilitiesSaveUpdatepost postId={result.id}/>
                    <div className="d-flex justify-content-center mt-5 ">
                        <h2 className="fw-bolder">{result.title}</h2>
                        
                    </div>
                    
                    <div>
                        <div className="d-flex justify-content-between mt-5 text-white-50">
                            <p>Autor : {result.authors}</p>
                            <p>{result.date_publisher}</p>
                        </div>
                        <div className="fw-bolder mt-3">
                            <p>{result.header}</p>
                        </div>
                    </div>
                    
                        <div className="mt-4">
                            <div className="container-fluid">
                                <div className="table-responsive">
                                    <div dangerouslySetInnerHTML={{__html: result.description}}>
            
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    <div className="mt-5">
                    <ProfileUtilitiesSaveUpdatepost postId={result.id}/>
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