import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="title">
          <h1>Tryunfo</h1>
        </div>
        <div className="create-card">
          <Form />
        </div>
      </>
    );
  }
}

export default App;
