import { Footer } from "../components/navigation/Footer";
import HeaderNavbar from "../components/navigation/HeaderNavbar";
import { check_authenticated, refresh, load_user } from "../redux/actions/auth";
import { useEffect } from "react";
import { connect } from "react-redux";


function Layout (props) {

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    useEffect(() => {
        props.refresh()
        props.check_authenticated()
        props.load_user()
    }, [])

    return (
        <div className="">
            <HeaderNavbar/>
                {props.children}    
            <Footer/>
        </div>
    )
}

export default connect(null, {
    check_authenticated,
    refresh,
    load_user
}) (Layout)