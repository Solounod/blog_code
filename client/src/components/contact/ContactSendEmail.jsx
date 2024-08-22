import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import { postContactSendEmail } from './contact';



import axios from 'axios';

export const apiContactSendEmail = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}api/contact-email/`
})


export const postContactSendEmail =  (data) => apiContactSendEmail.post("/", data, {
    
    headers: {
        "Content-Type": 'application/json',

    },
    
});

export function ContactSendEmail () {
    const [formData, setFormData] = useState({
        name : '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const {
        name,
        email,
        phone,
        subject,
        message,
    } = formData

    const onChange = e => setFormData({ ...formData,[e.target.name]: e.target.value});

    const onSubmit = e => {
        //e.preventDeafault();

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('subject', subject)
        formData.append('message', message)

        const handleSubmit = async (formData) => {
            console.log(formData)
            await postContactSendEmail(formData);
            setFormData({
                name : '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            })
        }

        handleSubmit(formData)  
    }

    return (
        <section className="container pt-5  container-md ">
            <div className="p-4 bg-black border">
                <div className="d-flex justify-content-center mt-5 ">
                    <h2 className="text-light">Contacto</h2>
                </div>
                <hr />
                <div>
                    <Form className="pt-2 text-light" action="" onSubmit={e=>onSubmit(e)}>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                            type="text"
                            name="name"
                            value={name}
                            onChange={e=>onChange(e)}
                            />
                        </Form.Group>
                        <Row className="mt-2">
                            <Col md>
                                <Form.Group >
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={e=>onChange(e)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group as={Col}>
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    onChange={e=>onChange(e)}
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
                            onChange={e=>onChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mt-2">Mensaje</Form.Label>
                            <Form.Control
                            type="textarea"
                            name="message"
                            value={message}
                            onChange={e=>onChange(e)}
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button className=" mt-4" type='submit' variant='outline-light'>
                                            Enviar
                            </Button>
                        </div>

                    </Form>
                </div>
            </div>
        </section>
    )
}