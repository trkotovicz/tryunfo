import PropTypes from 'prop-types';
import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.props;

    return (
      <div className="card">
        <h2 data-testid="name-card">{ cardName }</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } width="150" />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

/*
cardTrunfo
If inline com o Operador Lógico &&
Em JavaScript, true && expressão são sempre avaliadas como expressão, e false && expressão são sempre avaliadas como false.
Portanto, se a condição é true, o elemento logo depois do && irá aparecer no resultado. Se o elemento é false, React irá ignora-lo.
REFERÊNCIA
(https://medium.com/reactbrasil/renderiza%C3%A7%C3%A3o-condicional-em-react-bb8c16dddd6f)
(https://pt-br.reactjs.org/docs/conditional-rendering.html)
*/
