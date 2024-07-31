import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { profiles_utilities_savepost } from "../../redux/actions/profileutilities";
import Button from 'react-bootstrap/Button';

function ProfileUtilitiesSaveUpdatepost ({
    isAuthenticated,
    profiles_utilities_savepost,
    postId,
    user
}) {

    //useEffect(() => {
    //    profiles_utilities_savepost(postid)
    //},[profiles_utilities_savepost])
    console.log("Post ID recibido:", postId);  // Agrega esto para verificar el ID


    const onSubmit = () => {
        
        //const username = params.user
        if(isAuthenticated && user){
            console.log("Enviando Post ID:", postId);
            profiles_utilities_savepost(postId);
           
        }
        
    }

    return (
        <div>
           {isAuthenticated ? <Button variant="primary" onClick={onSubmit}>Leer mas tarde</Button>: <div>
            
           </div>}
        </div>
    )

}



const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
    results: state.ProfileUtilities.results
})

export default connect(mapStateToProps, {
    profiles_utilities_savepost
  }) (ProfileUtilitiesSaveUpdatepost);