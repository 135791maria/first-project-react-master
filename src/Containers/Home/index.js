
import React, { useState, useRef,  } from "react";
import {useHistory} from "react-router-dom"

import axios from "axios";
import template7 from "../../Assets/template7.png";
import seta from "../../Assets/seta.png";


import {
  Image,
  H1,
  ContainerItens,
  Container,
  Button,
  InputLabel,
  Input,

} from "./styles"

function App() {
  const [users, setUsers] = useState([]);
const history = useHistory()
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,

    });
    setUsers([...users, newUser]);

    history.push("/Usuarios");
  }
 

  return (

    <Container>
      <Image alt="logo-image" src={template7} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel >Nome</InputLabel>
        <Input ref={(inputName)} Placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={(inputAge)} Placeholder="idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="arrow" src={seta} />
        </Button>



      </ContainerItens>
    </Container>
  );

}
export default App;

