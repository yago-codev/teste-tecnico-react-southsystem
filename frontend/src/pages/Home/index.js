import React, { useEffect, useState } from 'react';
import { MdDelete, MdAdd, MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Container from './styles';

import ModalCreateDragon from '../../components/Modal/CreateDragon';
import { apiDragons } from '../../services/api';

function HomePage() {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    async function getDragons() {
      const response = await apiDragons.get('/dragon');
      setDragons(response.data);
    }
    getDragons();
  }, []);

  const handleDelete = (id) => {
    apiDragons.delete(`/dragon/${id}`);
    setDragons(dragons.filter((dragon) => dragon.id !== id));
  };

  const toggleModalCreate = () => {
    document.querySelector('#modalCreate').style.visibility = 'visible';
  };

  return (
    <>
      <Container>
        <ul>
          <div>
            <h2>Nome</h2>
            <h2>Tipo</h2>
            <h2>História</h2>
            <h2>
              <></>
            </h2>
            <h2>
              <></>
            </h2>
          </div>

          <div className="wrapper">
            <div>
              {dragons.map((dragon) => (
                <li key={dragon.id}>{dragon.name}</li>
              ))}
            </div>

            <div>
              {dragons.map((dragon) => (
                <li key={dragon.id}>{dragon.type}</li>
              ))}
            </div>

            <div>
              {dragons.map((dragon) => (
                <li key={dragon.id}>{dragon.histories}</li>
              ))}
            </div>

            <div className="btn-actions">
              {dragons.map((dragon) => (
                <button
                  key={dragon.id}
                  type="button"
                  onClick={() => handleDelete(dragon.id)}
                >
                  Deletar
                  <MdDelete />
                </button>
              ))}
            </div>

            <div className="btn-actions">
              {dragons.map((dragon) => (
                <Link
                  key={dragon.id}
                  to={`/dragon/${encodeURIComponent(dragon.id)}`}
                >
                  Editar
                  <MdModeEdit />
                </Link>
              ))}
            </div>
          </div>

          <div className="wrapperBtn">
            <button
              type="button"
              className="btnAdd"
              onClick={() => toggleModalCreate()}
            >
              Criar Dragão
              <MdAdd />
            </button>
          </div>
        </ul>
      </Container>
      <ModalCreateDragon />
    </>
  );
}

export default HomePage;
