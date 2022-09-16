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
    country: '',
  }

  async componentDidMount() {
    const dataObtained = await getData();
    this.setState({data: dataObtained});
  }

  handleLocationChange = async (country) => {
    const dataObtained = await getData(country);
    this.setState({data: dataObtained, country: country});
  }

  render(){

    const { data, country } = this.state;

    return(
      <div className={styles.container}>
        <Cards data={data}/> 
        <LocationPicker handleLocationChange={this.handleLocationChange}/>
        <Graph data={data} country={country}/> 
      </div>
    );
  }
}

export default App;
