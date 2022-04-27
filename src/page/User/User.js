import React from "react";
import { Button, Spinner } from "react-bootstrap";
import BasicLayout from "../../layout/BasicLayout";

import "./User.scss"

export default function User() {
  return (
    <BasicLayout className="user">
        <div className="user__title">
            <h2>Pacock</h2>
        </div>
        <div>Banner Usuario</div>
        <div>Info Usuario</div>
        <div className="user__tweets">Lista Tweets!</div>
    </BasicLayout>
  )
}
