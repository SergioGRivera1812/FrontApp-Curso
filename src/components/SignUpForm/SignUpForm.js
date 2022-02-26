import React, { useState } from 'react';
import { Row, Col, Form, Button, Spinner, Container } from "react-bootstrap";
import { values, size } from "lodash";
import { toast, useToast } from "react-toastify";
import { isEmailValid } from "../../utils/validations";
import { signUpApi } from "../../api/auth"

import "./SignUpForm.scss";

export default function SignUpForm(props) {
    const { setShowModal } = props;
    const [formData, setFormData] = useState(initialFormValue());
    const [signUpLoading, setsignUpLoading] = useState(false);


    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)

        let validCount = 0
        values(formData).some(value => {
            value && validCount++
            return null
        });
        //console.log(validCount);
        console.log(size(formData));
        if (validCount !== size(formData)) {
            toast.warning("Completa todos los campos del formulario")
        } else {
            if (!isEmailValid(formData.email)) {
                toast.warning("Email invalido")
            } else if (formData.password !== formData.repeatPassword) {
                toast.warning("Las constraseñas deben ser iguales")
            } else if (size(formData.password) < 6) {
                toast.warning("La contraseña debe tener al menos 6 caracteres")
            } else {
                setsignUpLoading(true);
                signUpApi(formData).then(response => {
                    if (response.code) {
                        toast.warning(response.message);
                    } else {
                        toast.success("El registro ha sido correcto");
                        setShowModal(false);
                        setFormData(initialFormValue());
                    }
                })
                    .catch(() => {
                        toast.error("Error del serivdor, intentelo más tarde")
                    })
                    .finally(() => {
                        setsignUpLoading(false);
                    });
            }

        }

    };

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="sign-up-form">
            <h2>Crea tu cuenta</h2>
            <Container>
                <Form onSubmit={onSubmit} onChange={onChange}>

                    <Form.Group>
                        <Row>
                            <Col style={{
                                padding: 0
                            }}>
                                <Form.Control
                                    type="text"
                                    placeholder='Nombre'
                                    name="nombre"
                                    defaultValue={formData.nombre}

                                />

                            </Col>
                            <Col style={{
                                padding: 0
                            }}>
                                <Form.Control
                                    type="text"
                                    placeholder='Apellidos'
                                    name="apellidos"
                                    defaultValue={formData.apellidos}

                                />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Form.Control
                                type="email"
                                placeholder="Correo electronico"
                                name="email"
                                defaultValue={formData.email}

                            />
                        </Row>

                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col style={{
                                padding: 0
                            }}>
                                <Form.Control
                                    type="password"
                                    placeholder="Contraseña"
                                    name="password"
                                    defaultValue={formData.password}
                                />
                            </Col>

                            <Col style={{
                                padding: 0
                            }}>
                                <Form.Control
                                    type="password"
                                    placeholder="Repetir contraseña"
                                    name="repeatPassword"
                                    defaultValue={formData.repeatPassword}
                                />
                            </Col>


                        </Row>
                    </Form.Group>
                    <br />
                    <Button variant='primary' type="submit">
                        {!signUpLoading ? "Registrarse" : <Spinner animation="border" />}

                    </Button>
                </Form>
            </Container>
        </div>
    );
}

function initialFormValue() {
    return {
        nombre: "",
        apellidos: "",
        email: "",
        password: "",
        repeatPassword: ""
    };
}
