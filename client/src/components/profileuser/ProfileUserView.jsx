import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { profile_user_view } from "../../redux/actions/profile_user";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

import ProfileUtilitiesView from "../profileutilities/ProfileUtilitiesView";

function ProfileUserView({
    isAuthenticated,
    user,
    profile_user_view,
    results
}) {

    const navigate = useNavigate();

   
    const stableProfileUserView = useCallback(() => {
        if (isAuthenticated && user) {
            profile_user_view(user.username);
        }
    }, [isAuthenticated, user, profile_user_view]);

    useEffect(() => {
        stableProfileUserView();
    }, [stableProfileUserView]);
    
    const handleBrandClick = (route) => {
        navigate(route);
    }

    const profileData = results && results.length > 0 ? results[0] : null;

    const avatarUrl = user?.username 
        ? `https://api.dicebear.com/9.x/initials/svg?seed=${user.username}&backgroundColor=198754&textColor=ffffff` 
        : "https://api.dicebear.com/9.x/initials/svg?seed=guest";

    return (
        <section className="container mt-5 pt-5 pb-5">
            <div className="mb-5 border-bottom border-secondary pb-3">
                <h1 className="display-5 fw-bold text-light">Mi Perfil</h1>
                <p className="text-white-50">Gestiona tu información personal y biblioteca.</p>
            </div>

            <Row className="g-5">
                <Col lg={4} md={12}>
                    <Card className="bg-black text-light border border-secondary shadow-lg position-sticky" style={{ top: '100px', zIndex: 1 }}>
                        <Card.Body className="text-center p-4">
                            
                            {/* Avatar */}
                            <div className="mb-4 position-relative d-inline-block">
                                <Image 
                                    src={avatarUrl} 
                                    roundedCircle 
                                    width={120} 
                                    height={120} 
                                    className="border border-3 border-dark"
                                    alt="Avatar"
                                />
                            </div>
                            <h3 className="fw-bold mb-1">{user?.username || 'Usuario'}</h3>
                            <p className="text-white-50 mb-4">{user?.email || 'email@ejemplo.com'}</p>
                            <div className="text-start bg-dark bg-opacity-25 p-3 rounded-3 mb-4 border border-secondary">
                                {profileData ? (
                                    <>
                                        <div className="mb-2">
                                            <small className="text-secondary text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Nombre</small>
                                            <div className="fs-6">{profileData.first_name || 'No definido'}</div>
                                        </div>
                                        <div className="mb-0">
                                            <small className="text-secondary text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Apellido</small>
                                            <div className="fs-6">{profileData.last_name || 'No definido'}</div>
                                        </div>
                                    </>
                                ) : (
                                    <p className="text-muted text-center m-0">Cargando datos...</p>
                                )}
                            </div>
                            <Button 
                                variant="outline-light" 
                                className="w-100 fw-bold"
                                onClick={() => handleBrandClick(`/form-profile/${user?.username}`)}
                            >
                                <i className="bi bi-pencil-square me-2"></i>
                                Editar Perfil
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={8} md={12}>
                    <div className="bg-black border border-secondary rounded-4 p-4 shadow-sm h-100">
                        <ProfileUtilitiesView isAuthenticated={isAuthenticated} user={user}/>
                    </div>
                </Col>
            </Row>
        </section>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
    results: state.ProfileUser.results
})

export default connect(mapStateToProps, {
    profile_user_view
})(ProfileUserView);