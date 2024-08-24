
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {connect} from 'react-redux';
import { reset_password_confirm } from '../../redux/actions/auth';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Layout from '../../hocs/Layout';
import Button from 'react-bootstrap/esm/Button';

function ConfirmResetPassword({ reset_password_confirm }) {
   const params = useParams();
   const navigate = useNavigate();

   const [requestSent, setRequestSent] = useState(false);

   const [formState, setformState] = useState({
    new_password: '',
    re_new_password: ''
    });

    const {
        new_password,
        re_new_password
    } = formState;

    const onChange = (e) => {
        setformState({ ...formState, [e.target.name]: e.target.value})
    };
    
    const onSubmit = e => {
        e.preventDefault();
        const uid = params.uid
        const token = params.token

        reset_password_confirm(uid, token, new_password, re_new_password)
        if (new_password === re_new_password)
          setRequestSent(true);
    }

    if (requestSent){
        navigate('/login')
    }

    return(
        <Layout>
            <section className='container mt-5 pt-5 container-md '>
                <div className="p-4 bg-black border rounded">
                <div className="text-light">
                    <h2>Confirmar cambio de contraseña</h2>
                </div>
                <Container>
                    <Form className="pt-2 text-light" onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label className="mt-2">Nueva contraseña</Form.Label>
                            <Form.Control
                            type="password"
                            name="new_password"
                            value={new_password}
                            onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mt-2">Repetir Contraseña</Form.Label>
                            <Form.Control
                             type="password"
                             name="re_new_password"
                             value={re_new_password}
                             onChange={onChange}
                             />
                        </Form.Group>
                        <div className="justify-content-center">
                        <Button className=" mt-4" type='submit' variant='outline-light'>
                            Cambiar contraseña
                        </Button>
                        </div>
                    </Form>
                </Container>
                </div>
            </section>
        </Layout>

    )
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{
    reset_password_confirm
})(ConfirmResetPassword)