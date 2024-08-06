import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { profiles_utilities_view } from "../../redux/actions/profileutilities";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProfileDeletePost from "./ProfileDeletePost";


function ProfileUtilitiesView ({
    isAuthenticated, 
    user, 
    profiles_utilities_view, 
    results}) 
    {

    const navigate = useNavigate()
    
    useEffect(() => {
        if (isAuthenticated && user) {
           
            profiles_utilities_view(user.username);
           
    
        }
        
    }, [isAuthenticated, user,  profiles_utilities_view]);

    console.log("Current results:", results);

    const handleBrandClick = (route) => {
        navigate(route)
    }

    return (
        <section>
          {results && (Array.isArray(results) ? results : [results]).map((item, index) => (
            <div key={index}>
                <Card style={{ width: '18rem' }} key={index}>
                    <Card.Body>
                        <Card.Title>{item.post_details.title}</Card.Title>
                        <Button variant="primary" onClick={() => handleBrandClick(`/post/${item.post_details.slug}/`)}>Leer</Button>
                        <ProfileDeletePost id={item.id} user={item.user} />
                    </Card.Body>
                </Card>
              
            </div>
            ))}
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