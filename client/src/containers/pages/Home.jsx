import ListPostBlog from "../../components/blog/ListPostBlog";
import { Header } from "../../components/header/Header";
import Layout from "../../hocs/Layout";

export function Home () {

    return (
        <Layout>
            <Header/>
            <ListPostBlog/>
        </Layout>
    )
}