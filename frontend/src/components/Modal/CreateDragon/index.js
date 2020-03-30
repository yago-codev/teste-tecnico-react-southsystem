import React, { useState } from 'react';
import { MdClear } from 'react-icons/md';

import { apiDragons } from '../../../services/api';

import { Layer, Modal } from './styles';

function ModalCreateDragon() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [histories, setHistories] = useState('');
  const [reloadPage, setReloadPage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name !== '' && type !== '' && histories !== '') {
      await apiDragons.post('/dragon', { name, type, histories });
      setReloadPage(true);
    }
  };

  const toggleModal = () => {
    document.querySelector('#modalCreate').style.visibility = 'hidden';
  };

  if (reloadPage) {
    return window.location.reload();
  }

  return (
    <Layer id="modalCreate">
      <Modal>
        <button type="button" onClick={() => toggleModal()}>
          <MdClear />
        </button>
        <form onSubmit={handleSubmit}>
          <h2>Criar Dragão</h2>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Nome do dragão"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div>
            <input
              name="type"
              type="text"
              placeholder="Tipo do dragão"
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
          </div>

          <div>
            <input
              name="histories"
              type="text"
              placeholder="História do dragão"
              onChange={(e) => setHistories(e.target.value)}
              value={histories}
            />
          </div>

          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </Modal>
    </Layer>
  );
}

export default ModalCreateDragon;
