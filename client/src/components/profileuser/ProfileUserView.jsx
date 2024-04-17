import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { profile_user_view } from "../../redux/actions/profile_user";


function ProfileUserView (
    {isAuthenticated,
    user,
    profile_user_view,
    results}) 
    {

    const params = useParams()

    

    //console.log(params)

    useEffect(() => {
        if (isAuthenticated && user) {
            profile_user_view(user.username);
        }
       //console.log(user.username)
    },[isAuthenticated,user, profile_user_view]);


    return (
        <section>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h2>Nombre de usuario: </h2>
            </div>
            <div>
                <ul>
                    <li>Primer nombre: </li>
                    <li>Apellido: </li>
                </ul>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
    results: state.ProfileUser.results
    

})

export default connect(mapStateToProps, {
    profile_user_view
})(ProfileUserView)