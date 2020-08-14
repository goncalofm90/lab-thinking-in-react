import React from 'react';
import data from './data.json';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <div className="producttable">
        <FilterableProductTable products={data.data} />
      </div>
    </div>
  );
}

export default App;
