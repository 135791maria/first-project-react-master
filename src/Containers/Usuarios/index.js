
import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import axios from "axios"
import template6 from "../../Assets/template6.png";
import seta from "../../Assets/seta.png";
import lixeira from "../../Assets/lixeira.png";

import {
  Image,
  H1,
  ContainerItens,
  Container,
  Button,
  User,

}
  from "./styles"


function Usuarios() {
  const [users, setUsers] = useState([]);
  const history = useHistory()

  

  useEffect(() => {
    async function fethUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")
      setUsers(newUsers);
    }
    fethUsers()
  }, []);




  async function deleteUser(userid) {
    await axios.delete(`http://localhost:3001/users/${userid} `)
    const newUsers = users.filter(user => user.id !== userid)

    setUsers(newUsers);

  }

  function goBackPage() {
    history.push("/")

  }
  
  return (

    <Container>
      <Image alt="logo-image" src={template6} />
      <ContainerItens>

        <H1>Usuàrios</H1>


        <ul>
          {users.map(user => (
            <User Key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={lixeira} alt="lata de lixo" />
              </button>
            </User>
          ))
          }
        </ul>

        <Button onClick={goBackPage}>
          <img alt="arrow" src={seta} />Voltar

        </Button>

      </ContainerItens>
    </Container>
  );
}
export default Usuarios

