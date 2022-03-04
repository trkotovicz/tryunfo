import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardListComponent extends React.Component {
  render() {
    const { cardList } = this.props;

    return (
      <>
        { cardList.map((card) => (
          <Card
            key={ card.name }
            cardName={ card.name }
            cardDescription={ card.description }
            cardAttr1={ card.attr1 }
            cardAttr2={ card.attr2 }
            cardAttr3={ card.attr3 }
            cardImage={ card.image }
            cardRare={ card.rarity }
            cardTrunfo={ card.isTrunfo }
          />))}
      </>
    );
  }
}

CardListComponent.propTypes = {
  cardList: PropTypes.string.isRequired,
};

export default CardListComponent;
