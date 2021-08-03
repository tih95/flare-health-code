import Header from './components/Header';
import Footer from './components/Footer';
import FilterableAirportTable from './components/FilterableAirportTable';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <FilterableAirportTable />
      <Footer />
    </div>
  );
}

export default App;
