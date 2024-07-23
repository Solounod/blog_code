import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { profiles_utilities_view } from "../../redux/actions/profileutilities";



function ProfileUtilitiesView ({
    isAuthenticated, 
    user, 
    profiles_utilities_view, 
    results}) 
    {

    useEffect(() => {
        if (isAuthenticated && user) {
            console.log(user.username)
            profiles_utilities_view(user.username);
           
    
        }
        
    }, [isAuthenticated, user,  profiles_utilities_view]);

    return (
        <section>
          {results && results.map((item, index) => (
            <div key={index}>
   <div >{item.id}</div>
   <div>{item.post_details.title}</div>
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