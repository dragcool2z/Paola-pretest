import React, { Component } from 'react';
import Header from './component/header/header';
import Body from './component/body/body';
import Footer from './component/footer/footer';
import styles from "./App.css";
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
export default App;