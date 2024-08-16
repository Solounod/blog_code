import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Layout from '../../hocs/Layout';
import Button from 'react-bootstrap/esm/Button';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';


function Login ({login, isAuthenticated}){
    const navigate = useNavigate()

    const [formState, setformState] = useState({
        username: '',
        password: ''
    });

    const {
        username,
        password
    } = formState;

    //const [activated, setActivated] = useState(false);

    const onChange = (e) => {
        setformState({ ...formState, [e.target.name]: e.target.value})
    };

    const onSubmit = e => {
        e.preventDefault();
        login(username, password);
        //setActivated(true);   
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate(`/Profile`);
        }
    }, [isAuthenticated, navigate]);
   
       /* if (activated && isAuthenticated){
            navigate(`/Profile`)
            
        }*/
    
    const handleClick = () => {
        navigate('/reset_password')
    }

    return (
        <Layout>
            <section className='container mt-5 pt-5 container-md '>
            <div className="p-4 bg-black border rounded">
                <div className="text-light">
                    <h2>Login</h2>
                </div>
                <hr />
                <Container>
                    <Form className="pt-2 text-light" onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label className="mt-2">Nombre usuario</Form.Label>
                            <Form.Control
                            type="text"
                            name="username"
                            value={username}
                            onChange={onChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mt-2">Contraceña</Form.Label>
                            <Form.Control
                             type="password"
                             name="password"
                             value={password}
                             onChange={onChange}
                             placeholder="Password" />
                        </Form.Group>
                        <div className="justify-content-center">
                        <Button className=" mt-4" type='submit' variant='outline-light'>
                            Enviar
                        </Button>
                        <a onClick={handleClick}><p className='mt-2 ' >Olvidaste la contraseña?</p></a>
                        </div>
                    </Form>
                </Container>
                </div>
            </section>
        </Layout>

    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
})

export default connect(mapStateToProps, {
    login
  }) (Login);