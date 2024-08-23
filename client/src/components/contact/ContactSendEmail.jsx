import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

export const apiContactSendEmail = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}api/contact-email/`
})

export const postContactSendEmail = (data) => apiContactSendEmail.post("/", data, {
    headers: {
        "Content-Type": 'application/json',
    },
});

export function ContactSendEmail() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [num1, setNum1] = useState(Math.floor(Math.random() * 9) + 1);
    const [num2, setNum2] = useState(Math.floor(Math.random() * 9) + 1);
    const [userResult, setUserResult] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    const {
        name,
        email,
        phone,
        subject,
        message,
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('subject', subject);
        formData.append('message', message);

        const handleSubmit = async (formData) => {
            console.log(formData);
            await postContactSendEmail(formData);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        };

        handleSubmit(formData);
    };

    useEffect(() => {
        const expectedResult = num1 + num2;
        setIsVerified(parseInt(userResult) === expectedResult);
    }, [userResult, num1, num2]);

    return (
        <section className="container pt-5 container-md">
            <div className="p-4 bg-black border">
                <div className="d-flex justify-content-center mt-5">
                    <h2 className="text-light">Contacto</h2>
                </div>
                <hr />
                <div>
                    <Form className="pt-2 text-light" onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Row className="mt-2">
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group as={Col}>
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        value={phone}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group>
                            <Form.Label className="mt-2">Asunto</Form.Label>
                            <Form.Control
                                type="text"
                                name="subject"
                                value={subject}
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mt-2">Mensaje</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                value={message}
                                onChange={onChange}
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-center mt-4">
                            <div>¿Cuánto es {num1} + {num2}?</div>
                            <input
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
                </div>
            </div>
        </section>
    );
}