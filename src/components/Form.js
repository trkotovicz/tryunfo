import PropTypes from 'prop-types';
import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange,
      onSaveButtonClick, onSubmit } = this.props;

    return (
      <form onSubmit={ onSubmit }>

        <label htmlFor="name-input">
          Nome da Carta
          <input
            type="text"
            data-testid="name-input"
            id="name-input"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <textarea
          data-testid="description-input"
          placeholder="Descrição da carta"
          id="description-input"
          name="description"
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <label htmlFor="attr1-input">
          Attr1
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
            name="attr1"
            min={ 0 }
            max={ 90 }
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2-input">
          Attr2
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
            name="attr2"
            min={ 0 }
            max={ 90 }
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3-input">
          Attr3
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
            name="attr3"
            min={ 0 }
            max={ 90 }
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image-input">
          Imagem da carta.
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <select
          data-testid="rare-input"
          id="rare-input"
          name="rarity"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option> normal </option>
          <option> raro </option>
          <option> muito raro </option>
        </select>

        <label htmlFor="trunfo-input">
          Supertrunfo ⭐️
          { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo-input"
            name="isTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          /> }
        </label>

        <button
          type="submit"
          data-testid="save-button"
          id="save-button"
          name="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
