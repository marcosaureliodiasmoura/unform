import React, { useState, useEffect } from "react";
import api from "../../services/api";
// import { Container } from './styles';

import { Link } from "react-router-dom";

export default function UserList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/projects");

      await setProjects(response.data);
    }
    loadUsers();
  }, []);

  console.log(projects);

  return (
    <>
      <Link to="/users/create">Criar usuário</Link>
      <table>
        <thead>
          <tr>
            <th>Nome do Projeto</th>
            <th>Valor Pra Arrecadar</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.amountcollected}</td>
              <td>
                <Link to={`/project/edit/${project.user_id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

  // return <h1>Hello Mundo</h1>;
}
