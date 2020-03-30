import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { apiDragons } from '../../services/api';

import Form from './styles';

function PageDetailDragon({ match }) {
  const dragonId = match.params.id;
  const [dragon, setDragon] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [histories, setHistories] = useState('');
  const [readOnlyName, setReadOnlyName] = useState(true);
  const [readOnlyType, setReadOnlyType] = useState(true);
  const [readOnlyHistories, setReadOnlyHistories] = useState(true);
  const [redirectToDragons, setRedirectToDragons] = useState(false);

  useEffect(() => {
    async function getDragons() {
      const response = await apiDragons.get(`/dragon/${dragonId}`);
      setDragon(response.data);
    }
    getDragons();
  }, [dragonId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await apiDragons.put(`/dragon/${dragonId}`, {
      name: name || dragon.name,
      type: type || dragon.type,
      histories: histories || dragon.histories,
    });
    setRedirectToDragons(true);
  };

  if (redirectToDragons) {
    return <Redirect to={{ pathname: '/dragons' }} />;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Clique nos campos para editar</h2>
      <div>
        <input
          type="text"
          name="name"
          value={readOnlyName ? dragon.name : name}
          readOnly={readOnlyName}
          onChange={(e) => setName(e.target.value)}
          onClick={() => setReadOnlyName(false)}
        />
      </div>

      <div>
        <input
          type="text"
          name="type"
          value={readOnlyType ? dragon.type : type}
          readOnly={readOnlyType}
          onChange={(e) => setType(e.target.value)}
          onClick={() => setReadOnlyType(false)}
        />
      </div>

      <div>
        <textarea
          type="text"
          name="histories"
          value={readOnlyHistories ? dragon.histories : histories}
          readOnly={readOnlyHistories}
          onChange={(e) => setHistories(e.target.value)}
          onClick={() => setReadOnlyHistories(false)}
        />
      </div>

      <div>
        <button type="submit">Editar</button>
      </div>
    </Form>
  );
}

export default PageDetailDragon;
