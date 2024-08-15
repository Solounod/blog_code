import { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from "../../hocs/Layout";
import { signup } from "../../redux/actions/auth";

 function Singup ({signup}) {
    const [formState, setformState] = useState({
      username : '',
      email : '',
      password : '',
      re_password : ''
      })

      const {
        username,
        email,
        password,
        re_password,
      } = formState;

      const onChange = (e) => {
        setformState({ ...formState, [e.target.name]: e.target.value});
      }

      const onSubmit = e => {
        e.preventDefault();
        signup(username, email, password, re_password);
      }

    return (
        <Layout>
            <section className='container mt-5 pt-5 container-md '>
              <div className="p-4 bg-black border">
                <div className="text-light">
                    <h2>Registrar</h2>
                </div>
                <Container>
                  <Form className="pt-2 text-light" onSubmit={onSubmit}>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Nombre usuario</Form.Label>
                        <Form.Control
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                        placeholder="Nombre usuario" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Email" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Contraceña</Form.Label>
                        <Form.Control 
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Repetir Contraceña</Form.Label>
                        <Form.Control 
                        type="password"
                        name="re_password"
                        value={re_password}
                        onChange={onChange}
                        placeholder="repassword" />
                      </Form.Group>
                      <Button className=" mt-4"  variant='outline-light' type="submit">
                          Registrar
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
    signup
  }) (Singup);