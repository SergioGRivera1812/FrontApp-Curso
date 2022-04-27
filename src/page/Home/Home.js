import React from "react";
import BasicLayout from '../../layout/BasicLayout'

import "./Home.scss";

export default function Home(props) {
  const { setRefreshCheckLogin } = props;

  return (
        <BasicLayout className="home" setRefreshCheckLogin={setRefreshCheckLogin}>
          <h2>Estamos en HOME</h2>
        </BasicLayout> 
  );
}
