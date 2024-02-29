
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
            <section className='mt-5 pt-5'>
                <div>
                    <h2>Confirmar cambio de contraceña</h2>
                </div>
                <Container>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>Nueva contraceña</Form.Label>
                            <Form.Control
                            type="password"
                            name="new_password"
                            value={new_password}
                            onChange={onChange}
                            placeholder="Nueva contraceña"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Repetir Contraceña</Form.Label>
                            <Form.Control
                             type="password"
                             name="re_new_password"
                             value={re_new_password}
                             onChange={onChange}
                             placeholder="Repetir contaraceña" />
                        </Form.Group>
                        <Button type='submit' variant='primary'>
                            Cambiar contraceña
                        </Button>
                    </Form>
                </Container>
            </section>
        </Layout>

    )
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{
    reset_password_confirm
})(ConfirmResetPassword)