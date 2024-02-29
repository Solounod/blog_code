import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Layout from '../../hocs/Layout';
import Button from 'react-bootstrap/esm/Button';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';


function Login ({login}){
    const navigate = useNavigate()

    const [formState, setformState] = useState({
        username: '',
        password: ''
    });

    const {
        username,
        password
    } = formState;

    const [activated, setActivated] = useState(false);

    const onChange = (e) => {
        setformState({ ...formState, [e.target.name]: e.target.value})
    };

    const onSubmit = e => {
        e.preventDefault();
        login(username, password);
        setActivated(true);

    }

    if (activated){
        navigate('/')
    }

    const handleClick = () => {
        navigate('/reset_password')
    }


    return (
        <Layout>
            <section className='mt-5 pt-5'>
                <div>
                    <h2>Login</h2>
                </div>
                <Container>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>Nombre usuario</Form.Label>
                            <Form.Control
                            type="text"
                            name="username"
                            value={username}
                            onChange={onChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraceña</Form.Label>
                            <Form.Control
                             type="password"
                             name="password"
                             value={password}
                             onChange={onChange}
                             placeholder="Password" />
                        </Form.Group>
                        <Button type='submit' variant='primary'>
                            Enviar
                        </Button>
                        <a onClick={handleClick}><p>Olvidaste la contraseña?</p></a>
                    </Form>
                </Container>
            </section>
        </Layout>

    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
    login
  }) (Login);