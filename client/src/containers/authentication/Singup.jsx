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

    const [num1, setNum1] = useState(Math.floor(Math.random() * 9) + 1);
    const [num2, setNum2] = useState(Math.floor(Math.random() * 9) + 1);
    const [userResult, setUserResult] = useState('');
    const [isVerified, setIsVerified] = useState(false);

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
        resetVerification();
      }

      const resetVerification = () => {
        setNum1(Math.floor(Math.random() * 9) + 1);
        setNum2(Math.floor(Math.random() * 9) + 1);
        setUserResult('');
        setIsVerified(false);
      };

      useEffect(() => {
        const expectedResult = num1 + num2;
        setIsVerified(parseInt(userResult) === expectedResult);
    }, [userResult, num1, num2]);

    return (
        <Layout>
            <section className='container mt-5 pt-5 container-md '>
              <div className="p-4 bg-black border rounded">
                <div className="text-light">
                    <h2>Registrar</h2>
                </div>
                <hr />
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
                      <div className="d-flex justify-content-center mt-4">
                            <div>Resuelve para enviar {num1} + {num2}</div>
                            <input
                                className="mx-2"
                                type="text"
                                value={userResult}
                                onChange={(e) => setUserResult(e.target.value)}
                            />
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            {isVerified ? (
                                <Button type='submit' variant='outline-light'>
                                    Enviar
                                </Button>
                            ) : (
                                <p>Resuelve la verificación para enviar el formulario.</p>
                            )}
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

export default connect(mapStateToProps, {
    signup
  }) (Singup);