
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import { reset_password } from '../../redux/actions/auth';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Layout from '../../hocs/Layout';
import Button from 'react-bootstrap/esm/Button';


function ResetPassword({ reset_password }){
    const navigate = useNavigate()
    const [requestSent, setRequestSent] = useState(false);

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])

    const [formState, setformState] = useState({
        email: '',
    });

    const {
        email
    } = formState;

    const onChange = (e) => {
        setformState({ ...formState, [e.target.name]: e.target.value})
    };

    const onSubmit = e => {
        e.preventDefault();
        reset_password(email);
        setRequestSent(true)

    };

    if (requestSent){
        navigate('/')
    }
    

    return(
        <Layout>
            <section className='container mt-5 pt-5 container-md '>
            <div className="p-4 bg-black border rounded">
            <div className="text-light">
                    <h2>Cambiar contraceña</h2>
                </div>
                <hr />
                <Container>
                    <Form className="pt-2 text-light" onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label className="mt-2">Email de usuario</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChange}/>
                        </Form.Group>
                        <Button className=" mt-4"  type='submit' variant='outline-light'>
                            Enviar email
                        </Button>
                    </Form>
                </Container>
            </div>
            </section>
        </Layout>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
    reset_password
})(ResetPassword) 