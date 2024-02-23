import { Footer } from "../components/navigation/Footer";
import { HeaderNavbar } from "../components/navigation/HeaderNavbar";

export function Layout ({children}) {

    return (
        <>
            <HeaderNavbar/>
                {children}    
            <Footer/>
        </>
    )
}