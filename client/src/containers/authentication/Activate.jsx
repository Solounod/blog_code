import Button from "react-bootstrap/esm/Button"
import Layout from "../../hocs/Layout"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { activate } from "../../redux/actions/auth"
import { useNavigate } from 'react-router-dom'

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

            <div className="mt-5">
                <h2>Activa tu cuenta</h2>   
                <Button variant="primary" onClick={activate_account}>Activar</Button>
            </div>

        </Layout>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
    activate
}) (Activate)