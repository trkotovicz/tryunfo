import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <main>

        <label htmlFor="name-input">
          Nome da Carta
          <input
            type="text"
            data-testid="name-input"
            id="name-input"
          />
        </label>

        <textarea
          data-testid="description-input"
          placeholder="Descrição da carta"
        />

        <label htmlFor="attr1-input">
          Attr1
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
          />
        </label>

        <label htmlFor="attr2-input">
          Attr2
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
          />
        </label>

        <label htmlFor="attr3-input">
          Attr3
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
          />
        </label>

        <label htmlFor="image-input">
          Imagem da carta.
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
          />
        </label>

        <select data-testid="rare-input">
          <option> normal </option>
          <option> raro </option>
          <option> muito raro </option>
        </select>

        <label htmlFor="trunfo-input">
          Supertrunfo ⭐️
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo-input"
          />
        </label>

        <button type="button" data-testid="save-button">
          Salvar
        </button>

      </main>
    );
  }
}

export default Form;
