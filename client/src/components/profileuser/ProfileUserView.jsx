import { useNavigate, useParams } from "react-router-dom";
import { useCallback } from 'react';
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { profile_user_view } from "../../redux/actions/profile_user";
import Button from 'react-bootstrap/esm/Button';
import ProfileUtilitiesView from "../profileutilities/ProfileUtilitiesView";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ProfileUserView (
    {isAuthenticated,
    user,
    profile_user_view,
    results}) 
    {

    const params = useParams()
    const navigate = useNavigate()

    const stableProfileUserView = useCallback(() => {
        if (isAuthenticated && user) {
            profile_user_view(user.username);
        }
    }, [isAuthenticated, user, profile_user_view]);

    useEffect(() => {
        stableProfileUserView();
    }, [stableProfileUserView]);

    //useEffect(() => {
    //    if (isAuthenticated && user) {
    //        profile_user_view(user.username);
  //
    //    }
    //    
    //}, [isAuthenticated, user, profile_user_view]);

    const handleBrandClick = (route) => {
        navigate(route)
    }

    const renderProfile = () => {
        if (results && results.length > 0) {
            return results.map((item, index) => (
                <div key={index}>
                    <div className="text-light">
                        <h2>Nombre de usuario: {user?.username}</h2>
                    </div>
                    <div className="mt-3">
                        <img className="rounded" src="https://api.dicebear.com/8.x/fun-emoji/svg?size=48" alt="avatar" />
                    </div>
                    <div className="mt-4">
                        <ul className="text-light">
                            <li>Primer nombre: {item.first_name}</li>
                            <li>Apellido: {item.last_name}</li>
                        </ul>
                    </div>
                   
                </div>
            ));
        } else {
            return (
                <div>
                    <div className="text-light">
                        <h2>Nombre de usuario: </h2>
                    </div>
                    <div>
                        <img src="https://api.dicebear.com/8.x/fun-emoji/svg?size=48" alt="avatar" />
                    </div>
                    <div className="mt-4">
                        <ul className="text-light">
                            <li>Primer nombre: </li>
                            <li>Apellido: </li>
                        </ul>
                    </div>
                </div>
            );
        }}

    return (
        <section className="container mt-5 pt-5 container-md">
            <div className="d-flex justify-content-center mt-4 text-light">
                <h2 className="fw-bolder fs-1">Perfil de usuario</h2>
            </div>
            <div className="mt-5">
                <Row>
                    <Col>    
                        <div className="">
                            {renderProfile()}
                        </div>
                    <div className="mt-5">
                        <Button type="submit" variant="outline-light" onClick={() => handleBrandClick(`/form-profile/${user.username}`)}>Cambiar datos</Button> 
                    </div>
                    </Col>
                    <Col>
                        <ProfileUtilitiesView isAuthenticated={isAuthenticated} user={user}/>
                    </Col>
                </Row>
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