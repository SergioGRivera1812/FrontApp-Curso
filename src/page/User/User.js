import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";

import "./User.scss"

function User(props) {
  const { match } = props;
  console.log(match.params.id);

  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>Pacock</h2>
      </div>
      <div>Banner Usuario</div>
      <div>Info Usuario</div>
      <div className="user__tweets">Lista Tweets!</div>
    </BasicLayout>
  );
}

export default withRouter(User);