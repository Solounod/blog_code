import Layout from "../../hocs/Layout"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { activate } from "../../redux/actions/auth"
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';

function Activate ({activate}) {

    const params = useParams()
    const navigate = useNavigate()

    const [activated, setActivated] = useState(false);

    const activate_account = () => {
        const uid = params.uid
        const token = params.token
        activate(uid, token)
        setActivated(true)
    }

    if(activate){
        navigate('/login')
    }

    return (
        <Layout>
            <section className='container mt-5 pt-5 container-md '>
            <div className="p-4 bg-black border rounded">
            <div className="text-light">
                <h2>Activa tu cuenta</h2>
                </div>
                <Container>  
                <Button className=" mt-4"  variant='outline-light' onClick={activate_account}>Activar</Button>
                </Container>
           
            </div>
            </section>
        </Layout>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
    activate
}) (Activate)