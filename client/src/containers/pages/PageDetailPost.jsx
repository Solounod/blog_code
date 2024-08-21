import { useEffect } from "react";
import DetailPostBlog from "../../components/blog/DetailPostBlog";
import Layout from "../../hocs/Layout";

export function PageDetailPost(){

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);


    return(
        <Layout>
            <DetailPostBlog/>
        </Layout>
    )
}