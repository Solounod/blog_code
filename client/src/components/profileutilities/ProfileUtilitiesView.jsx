import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { profiles_utilities_view } from "../../redux/actions/profileutilities";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProfileDeletePost from "./ProfileDeletePost";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProfileUtilitiesView ({
    isAuthenticated, 
    user, 
    profiles_utilities_view, 
    results}) 
    {

    const navigate = useNavigate()
    
    useEffect(() => {
        if (isAuthenticated && user?.username) {
           
            profiles_utilities_view(user.username);
           
        }
        
    }, [isAuthenticated, user?.username]);

    console.log("Current results:", results);

    const handleBrandClick = (route) => {
        navigate(route)
    }

    return (
        <section className="container ">
            <div className="">
                <div className="d-flex justify-content-center  text-light">
                        <h2>Tus artículos y tutoriales guardados</h2>
                </div>
                <div className="mt-5">
                    {results && (Array.isArray(results) ? results : [results]).map((item, index) => (
                        <div key={index}>
                            <Card className="bg-black text-light border "  key={index}>
                                <Card.Body className=" ">
                                    <Row>
                                        <Col>    
                                            <Card.Title>{item.post_details.title}</Card.Title>
                                        </Col>
                                        <Col>
                                            <div className="d-flex justify-content-around" >
                                                <Button variant="outline-light" style={{width: '5rem', height: '2.4rem'}} onClick={() => handleBrandClick(`/post/${item.post_details.slug}/`)}>Leer</Button>
                                                <ProfileDeletePost  id={item.id} user={item.user} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                    
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    results: state.ProfileUtilities.results
})

export default connect(mapStateToProps, {
    profiles_utilities_view
})(ProfileUtilitiesView )


//{results && results.map((item, index) => (
//    <div key={index}>{item.post_details.title}</div>
//))}