import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { profile_user_view } from "../../redux/actions/profile_user";
import Button from 'react-bootstrap/esm/Button';


function ProfileUserView (
    {isAuthenticated,
    user,
    profile_user_view,
    results}) 
    {

    const params = useParams()
    const navigate = useNavigate()

    

    useEffect(() => {
        if (isAuthenticated && user) {
            profile_user_view(user.username);
  
        }
        
    }, [isAuthenticated, user, profile_user_view]);

    const handleBrandClick = (route) => {
        navigate(route)
    }


    const renderProfile = () => {
        if (results && results.length > 0) {
            return results.map((item, index) => (
                <div key={index}>
                    <div>
                        <h2>Nombre de usuario: {user.username}</h2>
                    </div>
                    <div>
                        <img src="https://api.dicebear.com/8.x/fun-emoji/svg?size=48" alt="avatar" />
                    </div>
                    <div>
                        <ul>
                            <li>Primer nombre: {item.first_name}</li>
                            <li>Apellido: {item.last_name}</li>
                        </ul>
                    </div>
                </div>
            ));
        } else {
            return (
                <div>
                    <div>
                        <h2>Nombre de usuario: </h2>
                    </div>
                    <div>
                        <img src="https://api.dicebear.com/8.x/fun-emoji/svg?size=48" alt="avatar" />
                    </div>
                    <div>
                        <ul>
                            <li>Primer nombre: </li>
                            <li>Apellido: </li>
                        </ul>
                    </div>
                </div>
            );
        }}

    return (
        <section className="container">
           <div className="pt-5 mt-5">
           {renderProfile()}
            </div>
            <div>
                <Button type="submit" onClick={() => handleBrandClick(`/form-profile/${user.username}`)}>Submit form</Button> 
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