import React from 'react';
import Header from './Layout/Header';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Header branding="Bookstore CMS" />
      </div>
    );
  }
}

export default App;
