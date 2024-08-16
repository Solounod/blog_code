import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import { connect } from 'react-redux';
import { update_profile_user } from '../../redux/actions/profile_user';
import Layout from '../../hocs/Layout';


function FormProfileUser ({ update_profile_user, user, isAuthenticated, results }) {
   
    const navigate = useNavigate();

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
        //const username = params.user
        if(isAuthenticated && user){
            update_profile_user(user, first_name, last_name, () => {
                navigate(`/Profile`);
            })
           
        }
        
    }

    //onClick={() => handleBrandClick('/Profile')}

    return (
        <Layout>
            <section className='container pt-5  container-md '>
            <div className="p-4 bg-black border">
            <div className="d-flex justify-content-center mt-5 ">
                    <h2 className="text-light">Cambio nombre de perfil</h2>
                </div>
                <hr />
                <Container>
                        <Form onSubmit={onSubmit}>
                            <Form.Group>
                                <Form.Label className='text-light mt-2'>Primer nombre</Form.Label>
                                <Form.Control
                                type="text"
                                name="first_name"
                                value={first_name}
                                onChange={onChange}
                                placeholder=""/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='text-light  mt-2'>Segundo Nombre</Form.Label>
                                <Form.Control
                                 type="text"
                                 name="last_name"
                                 value={last_name}
                                 onChange={onChange}
                                 placeholder="" />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                            <Button className=" mt-4" type='submit' variant='outline-light'>
                                            Enviar
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
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
    results: state.ProfileUser.results
})

export default connect(mapStateToProps, {
    update_profile_user
  }) (FormProfileUser);