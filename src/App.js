import React from 'react';
import './App.css';
import Card from './components/Card';
import CardListComponent from './components/CardListComponent';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: 'https://i.pinimg.com/736x/dd/90/e3/dd90e38991d09221aa86e4983cd10851.jpg',
      rarity: 'normal',
      isTrunfo: false,
      hasTrunfo: false,
      cardList: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  validate = () => {
    const { name, description, image, attr1, attr2, attr3 } = this.state;

    const atributo1 = parseInt(attr1, 10);
    const atributo2 = parseInt(attr2, 10);
    const atributo3 = parseInt(attr3, 10);
    const maxValueAttr = 90;
    const sum = atributo1 + atributo2 + atributo3;
    const maxSum = 210;
    let buttonDisable = true;

    // define tamanho de name, description, image
    if (name.length !== 0 && description.length !== 0 && image.length !== 0) {
      buttonDisable = false;
    }

    // define min e max dos atributos
    if ((atributo1 > maxValueAttr) || (atributo1 < 0) || (attr1 === '')) {
      buttonDisable = true;
    }

    if ((atributo2 > maxValueAttr) || (atributo2 < 0) || (attr2 === '')) {
      buttonDisable = true;
    }

    if ((atributo3 > maxValueAttr) || (atributo3 < 0) || (attr3 === '')) {
      buttonDisable = true;
    }

    // define valor máximo da soma
    if (sum > maxSum) {
      buttonDisable = true;
    }

    return buttonDisable;
  }

  // Obtive a ajuda do Murilo Costa para entender a lógica desse requisito
  addNewCard = () => {
    const { name, description, image,
      attr1, attr2, attr3, rarity, isTrunfo } = this.state;

    // cria um obj que recebe os estados do formulário
    const newCard = {
      name,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rarity,
      isTrunfo,
    };

    // coloca o newCard dentro do cardList e limpa o estado do componente pai
    this.setState((prevState) => ({
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rarity: 'normal',
      isTrunfo: false,
      cardList: [...prevState.cardList, newCard],
    }), this.verifyTrunfo);
  }

  // Obtive a ajuda do Gabriel Pinheiro na monitoria para entender o setState nesse requisito
  verifyTrunfo = () => {
    const { cardList } = this.state;

    const trunfoCard = cardList.some((card) => card.isTrunfo);

    this.setState({ hasTrunfo: trunfoCard });
  }

  handleSubmit= (event) => {
    event.preventDefault();
    // chama a func de salvar carta
    this.addNewCard();
  }

  render() {
    const { name, description, attr1,
      attr2, attr3, image, rarity,
      isTrunfo, hasTrunfo, cardList } = this.state;

    return (
      <>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ isTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.validate() }
          onSubmit={ this.handleSubmit }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ isTrunfo }
          hasTrunfo={ hasTrunfo }
        />
        <CardListComponent
          cardList={ cardList }
        />
      </>
    );
  }
}

export default App;
