import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { profiles_utilities_deletepost } from "../../redux/actions/profileutilities";
import Button from 'react-bootstrap/Button';

function ProfileDeletePost ({
    isAuthenticated,
    profiles_utilities_deletepost,
    id,
    user
}) {
    const navigate = useNavigate()

    const onSubmit = () => {
        
        //const username = params.user
        if(isAuthenticated && user){
            console.log("Enviando Post ID:", id);
            profiles_utilities_deletepost(id);
            //location.reload()
        }        
    }


    return (
        <div>
            {isAuthenticated ? <Button className="mx-3" variant="danger" onClick={onSubmit}>Eliminar</Button>: <div>
            
            </div>}
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    
})

export default connect(mapStateToProps, {
    profiles_utilities_deletepost,
  }) (ProfileDeletePost);