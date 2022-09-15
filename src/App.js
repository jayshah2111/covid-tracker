import './App.module.css';
import styles from './App.module.css';

import Cards from './components/Cards/cards.component';
import Graph from './components/Graph/graph.component';
import LocationPicker from './components/LocationPicker/locationPicker.component';

function App() {
  return (
    <div className={styles.container}>
      <Cards />
      <Graph />
      <LocationPicker />
    </div>
  );
}

export default App;
