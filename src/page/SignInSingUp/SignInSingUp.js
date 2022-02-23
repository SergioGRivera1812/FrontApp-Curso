import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faComment, faUsers } from "@fortawesome/free-solid-svg-icons";
import BasicModal from '../../components/Modal/BasicModal/BasicModal';
import LogoTec from "../../assets/png/icono tec.png";
import LogoIconTec from "../../assets/png/banner.png";
import SignUpForm from '../../components/SignUpForm/SignUpForm';


import "./SignInSingUp.scss";

export default function SignInSingUp() {
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const openModal = content => {
    setShowModal(true);
    setContentModal(content);
  };


  return (
    <>
      <Container className="signin-signup" fluid>
        <Row>
          <LeftComponent />
          <RightComponent openModal={openModal} setShowModal={setShowModal} />

        </Row>
      </Container>
      <BasicModal show={showModal} setShow={setShowModal}>
        {contentModal}
      </BasicModal>
    </>
  );
}

function LeftComponent() {
  return (
    <Col className="signin-signup__left" xs={6}>
      <img src={LogoTec} width="600" height="600" alt="Gatos Negros" />
      <div>
        <h2>
          <FontAwesomeIcon icon={faSearch} />
          Sigue lo que te interesa.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faUsers} />
          Enterate de que habla la comunidad del Tec.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faComment} />
          Unete a la conversación.
        </h2>

      </div>

    </Col>
  );
}

function RightComponent(props) {
  const { openModal, setShowModal } = props;
  return (
    <Col className="signin-signup__right" xs={6}>
      <div>
        <img src={LogoIconTec} alt="Gatos" />
        <h2>Mira lo que sucede en nuestro Campus</h2>
        <h3>Únete a Black Cat hoy  </h3>
        <Button
          variant="primary"
          onClick={() => openModal(<SignUpForm setShowModal={setShowModal} />)}
        >
          Registrate</Button>
        <Button
          variant="outline-primary"
          onClick={() => openModal(<h2>Login</h2>)}
        >
          Iniciar sesión</Button>
      </div>
    </Col>
  );
}
