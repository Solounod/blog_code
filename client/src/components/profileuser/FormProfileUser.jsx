import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import { connect } from 'react-redux';
import { update_profile_user } from '../../redux/actions/profile_user';
import Layout from '../../hocs/Layout';


function FormProfileUser ({ update_profile_user, user }) {
    const params = useParams()

    const [formState, setformState] = useState({
        first_name: '',
        last_name: ''
    });
    
    const {
        first_name,
        last_name
    } = formState;

    const onChange = (e) => {
        setformState({
            ...formState, [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        update_profile_user(user.username, first_name, last_name)
    }



    return (
        <Layout>
            <section className='pt-5'>
                <Container>
                        <Form onSubmit={onSubmit}>
                            <Form.Group>
                                <Form.Label>Primer nombre</Form.Label>
                                <Form.Control
                                type="text"
                                name="first_name"
                                value={first_name}
                                onChange={onChange}
                                placeholder="first_name"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Segundo Nombre</Form.Label>
                                <Form.Control
                                 type="text"
                                 name="last_name"
                                 value={last_name}
                                 onChange={onChange}
                                 placeholder="last_name" />
                            </Form.Group>
                            <Button type='submit' variant='primary'>
                                Enviar
                            </Button>
                        </Form>
                    </Container>
            </section>
        </Layout>

    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
})

export default connect(mapStateToProps, {
    update_profile_user
  }) (FormProfileUser);