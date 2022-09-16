import './App.module.css';
import styles from './App.module.css';

import Cards from './components/Cards/cards.component';
import Graph from './components/Graph/graph.component';
import LocationPicker from './components/LocationPicker/locationPicker.component';

import { getData } from './api';
import React from 'react';

class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const dataObtained = await getData();
    this.setState({data: dataObtained});
  }

  render(){

    const { data } = this.state;

    return(
      <div className={styles.container}>
        <Cards data={data}/> 
        <LocationPicker />
        <Graph />
      </div>
    );
  }
}

export default App;
