import { Footer } from "../components/navigation/Footer";
import HeaderNavbar from "../components/navigation/HeaderNavbar";
import { check_authenticated, refresh, load_user } from "../redux/actions/auth";
import { useEffect } from "react";
import { connect } from "react-redux";


function Layout (props) {

    useEffect(() => {
        props.refresh()
        props.check_authenticated()
        props.load_user()
    }, [])

    return (
        <>
            <HeaderNavbar/>
                {props.children}    
            <Footer/>
        </>
    )
}

export default connect(null, {
    check_authenticated,
    refresh,
    load_user
}) (Layout)